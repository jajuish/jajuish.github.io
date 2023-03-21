import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";

import { Circle } from "../../assets";
import { pageElementIdGenerator } from '../../utils/helpers';
import "./styles.scss";

interface IScroller {
	children: JSX.Element[];
}
export default function Scroller({ children }: IScroller) {
	const [selectedItem, setSelectedItem] = useState<number>(-1);

	// const pageContainer = useRef<HTMLDivElement>(null);
	const elRefs = useRef<Array<HTMLDivElement | null>>([]);

	const componentHeights: number[] = children.map((e, i) => elRefs.current[i]?.clientHeight || 0)
	const componentPositions = componentHeights.reduce((_height, _children) => {
		const lastElement = _height.slice(-1)[0];
		return _height.concat([lastElement + _children]);
	},
		[0],
	)

	useLayoutEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [componentPositions]);

	const createNavigator = () => {
		const navigationPoints = [];

		for (let i = 0; i < children.length; i++) {
			navigationPoints.push(
				<div
					key={i}
					onClick={() => handleClick(i)}
					className="navigation-button"
				>
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

	const handleClick = useCallback((num: number) => {
		setSelectedItem(num)

		const element = document.getElementById(pageElementIdGenerator(num));
		if (element) {
			// window.removeEventListener('scroll', handleScroll);
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			// setTimeout(() => {
			// 	window.addEventListener('scroll', handleScroll, { passive: true })
			// }, 1000)
		}

		// if (pageContainer.current !== null) {
		// 	pageContainer.current.style.transform = `translate3d(0, -${componentPositions[num]}px, 0)`;
		// 	pageContainer.current.style.transition = `0.6s ease-in-out;`
		// }
	},
		[componentPositions]
	);

	// TODO: slowly enter from side, animation
	// TODO: scroll extremely quickly to each part of page
	const handleScroll = () => {
		const position = window.pageYOffset.valueOf() + 5;
		const currComp = componentPositions.concat(position).sort((a, b) => a - b).indexOf(position);

		const compIndex = (currComp.valueOf() - 1) === -1 ? 0 : (currComp.valueOf() - 1)

		const topComponentScreenSpace = componentPositions[(compIndex.valueOf()) + 1] - position
		const topComponentScreenSpacePercentage = (topComponentScreenSpace / window.outerHeight) * 100

		if (topComponentScreenSpacePercentage < 55) {
			setSelectedItem(compIndex + 1)
		} else {
			setSelectedItem(compIndex)
		}
	};

	return (
		<>
			<div className="pagination">
				{createNavigator()}
			</div>
			<div
			// ref={pageContainer}
			>
				{children.map((childElement, i) =>
					<div
						ref={el => elRefs.current[i] = el}
						key={i}
					>
						{childElement}
					</div>
				)}
			</div>
		</>
	)
}
