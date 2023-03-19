import "./styles.scss";
import { Circle } from "../../assets";
import { paginationCircleSize } from "../../utils/constants";

interface IScroller {
	length: number;
	handleClickScroll: (i: number) => void;
	selectedItem: number;
}
export default function Scroller({ length, handleClickScroll, selectedItem }: IScroller) {
	const getPagesNumbers = () => {
		const pageNumbers = [];

		for (let i = 0; i < length; i++) {
			pageNumbers.push(
				<div
					key={i}
					onClick={() => handleClickScroll(i)}
					className="page-item"
				>
					{/* {i + 1} */}
					<Circle
						size={paginationCircleSize.medium}
						fill={i === selectedItem}
						colour="black"
					/>
				</div>,
			);
		}

		return [...pageNumbers];
	};
	return (
		<div className="pagination">
			{getPagesNumbers()}
		</div>
	)
}