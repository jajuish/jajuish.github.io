import "./styles.scss";


// TODO: naam pehle bada fir scroll pe chhota
// TODO: font: luicida
// TODO: bg image ka size chhota hona chahiye
// TODO: create ij animation like this https://iconscout.com/lottie/puzzle-game-7956868?utm_campaign=search&utm_medium=marketplace&utm_source=lottiefiles to put on right side
interface IHome {
}
export default function Home({ }: IHome) {
	return (
		<div className="home-page-container">
			
			<div className="inside-flex">
				<div className="my-name">ISHITA<br />JAJU</div>
				<div className="my-position">Full stack developer</div>
			</div>

		</div>
	);
}