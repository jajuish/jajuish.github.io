import { useEffect, useMemo, useRef, useState, RefObject, createRef } from "react";
import { Circle } from "../../assets";
import "./styles.scss";

interface IScroller {
	children: JSX.Element[];
	handleClickScroll: (i: number) => void;
	selectedItem: number;
}
export default function Scroller({ children, handleClickScroll, selectedItem }: IScroller) {
	const positions = useMemo(() =>
		children.reduce(
			(_positions, _children) => {
				// console.log("_positions==",_positions)
				// console.log(_children)
				const lastElement = _positions.slice(-1)[0];
				const height = _children.props.height
					? parseInt(_children.props.height)
					: 100;
				return _positions.concat([lastElement - height]);
			},
			[0],
		),
		[children],
	);
	// console.log(positions)

	const getPagesNumbers = () => {
		const pageNumbers = [];

		for (let i = 0; i < children.length; i++) {
			pageNumbers.push(
				<div
					key={i}
					onClick={() => handleClickScroll(i)}
					className="navigation-button"
				>
					{/* {i + 1} */}
					<Circle
						// size={paginationCircleSize.medium}
						active={i === selectedItem}
					// colour="white"
					// className="pagination-circle"
					/>
				</div>,
			);
		}

		return [...pageNumbers];
	};

	const ref1 = useRef<HTMLDivElement>(null);
	const isInViewport1 = useIsInViewport(ref1);
	console.log('isInViewport1: ', isInViewport1);

	return (
		<>
			<div className="pagination">
				{getPagesNumbers()}
			</div>
			{children}
			<div
				style={{ backgroundColor: "blue", height: 200, width: 200 }}
				ref={ref1}
			/>
		</>
	)
}

function useIsInViewport(ref: React.MutableRefObject<HTMLDivElement | null> | null) {
	// console.log("REF==",ref?.current)
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting),
			),
		[],
	);

	useEffect(() => {
		if (ref !== null && ref.current !== null)
			observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref?.current, observer]);

	return isIntersecting;
}