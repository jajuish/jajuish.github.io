import "./styles.scss";
import { Circle } from "../../assets";

interface IScroller {
	children: JSX.Element | JSX.Element[];
	handleClickScroll: (i: number) => void;
	selectedItem: number;
}
export default function Scroller({ children, handleClickScroll, selectedItem }: IScroller) {
	const getPagesNumbers = () => {
		const pageNumbers = [];

		if (Array.isArray(children)) {
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
							fill={i === selectedItem}
							// colour="white"
							// className="pagination-circle"
						/>
					</div>,
				);
			}
		}

		return [...pageNumbers];
	};
	return (
		<>
			<div className="pagination">
				{getPagesNumbers()}
			</div>
			{children}
		</>
	)
}