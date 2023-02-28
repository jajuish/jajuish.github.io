import Pager from "react-bootstrap/Pagination";
import PageItem from 'react-bootstrap/PageItem'

interface IScroller {
	length: number;
	handleClickScroll: (i: number) => void;
}
export default function Scroller({ length, handleClickScroll }: IScroller) {
	const getPagesNumbers = () => {
		const pageNumbers = [];

		for (let i = 0; i < length; i++) {
			pageNumbers.push(
				<PageItem
					key={i}
					onClick={() => handleClickScroll(i)}
				>
					{i + 1}
				</PageItem>,
			);
		}

		return [...pageNumbers];
	};
	return (
		<Pager className="pagination-additional-class" size="lg">
			{getPagesNumbers()}
		</Pager>
	)
}