import "./styles.scss";

interface IScroller {
	length: number;
	handleClickScroll: (i: number) => void;
}
export default function Scroller({ length, handleClickScroll }: IScroller) {
	const getPagesNumbers = () => {
		const pageNumbers = [];

		for (let i = 0; i < length; i++) {
			pageNumbers.push(
				<div
					key={i}
					onClick={() => handleClickScroll(i)}
					className="page-item"
				>
					{i + 1}
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