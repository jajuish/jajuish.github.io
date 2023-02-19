import "./styles.scss";

interface IHome {
	id: string;
}
export default function Home({ id }: IHome) {
	return (
		<div className="page-container" id={id}>
			Hi 1
		</div>
	);
}