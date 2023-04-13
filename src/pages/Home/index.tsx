import "./styles.scss";

// TODO: naam pehle bada fir scroll pe chhota
// TODO: font: luicida
// TODO: bg image ka size chhota hona chahiye
// TODO: create ij animation like this https://iconscout.com/lottie/puzzle-game-7956868?utm_campaign=search&utm_medium=marketplace&utm_source=lottiefiles to put on right side. phone pe upar neeche and text kinda overlaps

// TODO: in the about, wipe enter on scroll. before that not visible only name visible. then name small and about enter
// TODO: in the about, do funky animations like the underline and stuff

// TODO: for every link, on hover add tedha underline of different colours
interface IHome {}
export default function Home({}: IHome) {
	return (
		<div className="hero">
			<div className="home-container">
				<div className="inside-flex">
					<div className="my-name">ISHITA</div>
					<div className="my-name">JAJU</div>
					<div className="my-position">full stack developer</div>
				</div>
				<div className="about-me">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis diam lobortis risus elementum
					rhoncus. Pellentesque vitae tristique nulla. Donec vel convallis libero, auctor porttitor ante. Etiam rutrum
					ultricies euismod. Sed dapibus vestibulum ultrices. Nunc malesuada ac elit quis euismod. Suspendisse nisl
					diam, tristique in placerat ac, aliquet tincidunt nunc. Aliquam dignissim ex vitae fringilla feugiat. Praesent
					dapibus tellus non justo porttitor, eget dignissim justo cursus. Nunc metus augue, ornare ac varius at, varius
					eu lorem. Sed efficitur felis a tortor semper, eget posuere dolor convallis. Nam ut ipsum eu nibh tincidunt
					malesuada in nec ante. Vivamus augue turpis, iaculis quis ipsum eu, pellentesque pretium nulla.
				</div>
			</div>
		</div>
	);
}
