import { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";

import Circle from "../../assets/Circle"; // TODO: fix this import
import { pageElementIdGenerator, useDebounce } from "../../utils/helpers";
import "./styles.scss";

// TODO: hover pe title batara
interface IScroller {
	children: JSX.Element[];
}
export default function Scroller({ children }: IScroller) {
	const [selectedItem, setSelectedItem] = useState<number>(-1);

	// const pageContainer = useRef<HTMLDivElement>(null);
	const elRefs = useRef<Array<HTMLElement | null>>([]);

	const componentHeights: number[] = children.map((e, i) => elRefs.current[i]?.clientHeight || 0);
	const componentPositions = componentHeights.reduce(
		(_height, _children) => {
			const lastElement = _height.slice(-1)[0];
			return _height.concat([lastElement + _children]);
		},
		[0],
	);

	useEffect(() => {
		window.onload = function () {
			const element = document.getElementById("scroller");
			if (element) {
				element.className += " pagination-transition left-20";
			}
		};
	}, []);

	useLayoutEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [componentPositions]);

	const createNavigator = () => {
		const navigationPoints = [];

		for (let i = 0; i < children.length; i++) {
			navigationPoints.push(
				<div key={i} onClick={() => handleClick(i)} className="navigation-button">
					<Circle
						// size={paginationCircleSize.medium}
						darkBg={true}
						active={i === selectedItem}
					/>
				</div>,
			);
		}

		return [...navigationPoints];
	};

	const handleClick = useCallback(
		(num: number) => {
			setSelectedItem(num);

			const element = document.getElementById(pageElementIdGenerator(num));
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		},
		[componentPositions],
	);

	const handleScroll = useDebounce(() => {
		const position = window.pageYOffset.valueOf() + 5;
		const currComp = componentPositions
			.concat(position)
			.sort((a, b) => a - b)
			.indexOf(position);

		const compIndex = currComp.valueOf() - 1 === -1 ? 0 : currComp.valueOf() - 1;

		const topComponentScreenSpace = componentPositions[compIndex.valueOf() + 1] - position;
		const topComponentScreenSpacePercentage = (topComponentScreenSpace / window.outerHeight) * 100;

		// console.log((position - 5), componentPositions[currComp])
		// if (Math.abs((position - 5) - componentPositions[currComp]) < 20) {
		// 	setSelectedItem(compIndex)
		// } else
		if (topComponentScreenSpacePercentage < 55) {
			setSelectedItem(compIndex + 1);
		} else {
			setSelectedItem(compIndex);
		}
	}, 100);

	return (
		<>
			<nav className="pagination" id="scroller">
				{createNavigator()}
			</nav>
			<div
			// ref={pageContainer}
			>
				{children.map((childElement, i) => (
					<section ref={(el) => (elRefs.current[i] = el)} key={i}>
						{childElement}
					</section>
				))}
			</div>
		</>
	);
}

// info: overflow for more than a number of circle points is always hidden. so if it goes beyond a certain nr of components, it will not work
// info: for chrome mobile, it might scroll even though it is fixed position. for this you might need to add stuff to your meta viewport tag in html base file
interface PROPS {
	numbers: boolean; // show either numbers or shapes
	edges: "round" | "sharp"; //
	size: "xs" | "s" | "m" | "l" | "xl"; // size of the elements. on mobile it is always the same size
	position: "top" | "right" | "bottom" | "left"; // position of navbar on the page
	slideIn: boolean; // whether to slide into the page at the beginning
	glowOnActive: boolean;
	glowOnHover: boolean;
	colour: string; // bg colour of the element
	pageHeadings: string[]; // show custom text instead of numbers or circles
	textColour: string; // text colour inside. only applies if pageHeadings or numbers is applied
	debounceDelay: number; // use 0 to avoid any debounce and have it be active on every scroll
	marginBottom: number; // defaults to 16px
}
