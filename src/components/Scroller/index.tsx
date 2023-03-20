import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";

import { Circle } from "../../assets";
import { pageElementIdGenerator } from '../../utils/helpers';
import "./styles.scss";

interface IScroller {
	children: JSX.Element[];
}
export default function Scroller({ children }: IScroller) {
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
						active={i === selectedItem}
					// colour="white"
					// className="pagination-circle"
					/>
				</div>,
			);
		}

		return [...navigationPoints];
	};

	const [selectedItem, setSelectedItem] = useState<number>(0);
  const handleClick = (num: number) => {
    const element = document.getElementById(pageElementIdGenerator(num));
    setSelectedItem(num)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

	const elRefs = useRef<Array<HTMLDivElement | null>>([])
	const [componentPositions, setComponentPositions] = useState<number[]>([])
	useEffect(() => {
		const componentHeights: number[] = children.map((e, i) => elRefs.current[i]?.clientHeight || 0)
		setComponentPositions(componentHeights.reduce((_height, _children) => {
			const lastElement = _height.slice(-1)[0];
			return _height.concat([lastElement + _children]);
		},
			[0],
		))
	}, [elRefs, children])

	const handleScroll = () => {
		const position = window.pageYOffset;
		const currComp = componentPositions.concat(position).sort((a, b) => a - b).indexOf(position);

		const temp = (currComp.valueOf() - 1) === -1 ? 0 : (currComp.valueOf() - 1)
		setSelectedItem(temp)
	};

	useLayoutEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: false });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className="pagination">
				{createNavigator()}
			</div>
			{children.map((childElement, i) =>
				<div
					ref={el => elRefs.current[i] = el}
					key={i}
				>
					{childElement}
				</div>
			)}
		</>
	)
}
