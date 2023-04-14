import { useEffect, useState } from "react";
import "./styles.scss";

// TODO: bg image ka size chhota hona chahiye
// TODO: create ij animation like this https://iconscout.com/lottie/puzzle-game-7956868?utm_campaign=search&utm_medium=marketplace&utm_source=lottiefiles to put on right side. phone pe upar neeche and text kinda overlaps
// TODO: in the about, wipe enter on scroll. before that not visible only name visible. then name small and about enter
// TODO: in the about, do funky animations like the underline and stuff
// TODO: for every link, on hover add tedha underline of different colours
// TODO: load everything super smooth. and everything should wipe enter!! the navbar, my name, logo etc
// TODO: add frosted glass css bg somewhere. maybe in cards background
// TODO: add a loader until all assets have loaded. only then load page and bring it to top always
// TODO: in phones, ishita jaju and fsd should be on separate lines
// TODO: fix transform for different media sizes cuz rn its wonky and goes all over the place

export default function Home() {
	const [scrolledDown, setScrolledDown] = useState(false);

	// This will run one time after the component mounts
	useEffect(() => {
		// callback function to call when event triggers
		const onPageLoad = () => {
			window.addEventListener("scroll", onScroll, { once: true });
		};

		// Check if the page has already loaded
		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad, false);
			// Remove the event listener when component unmounts
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	const onScroll = () => {
		const onTop = window.pageYOffset.valueOf() <= 5;

		// if (!onTop) {
		setTimeout(() => setScrolledDown(true), 400);
		const first = document.getElementById("first");
		if (first) {
			first.className += " ishita";
		}

		const last = document.getElementById("last");
		if (last) {
			last.className += " jaju";
		}

		const pos = document.getElementById("pos");
		if (pos) {
			pos.className += " fsd";
		}
		// } else {
		// 	setTimeout(() => setScrolledDown(false), 400);
		// }
	};

	return (
		<div className="hero">
			<div className="home-container">
				{!scrolledDown && (
					<div className="inside-flex">
						<div className="my-name" id="first">
							ISHITA
						</div>
						<div className="my-name" id="last">
							JAJU
						</div>
						<div className="my-position" id="pos">
							full stack developer
						</div>
					</div>
				)}
				{scrolledDown && (
					<div className="inside-flex inside-flex__small">
						<span className="my-name my-name__small" id="name-small">
							ISHITA JAJU
						</span>
						<span className="my-position my-position__small" id="position-small">
							full stack developer
						</span>
					</div>
				)}
				{/* <div className="about-me">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis diam lobortis risus elementum
					rhoncus. Pellentesque vitae tristique nulla. Donec vel convallis libero, auctor porttitor ante. Etiam rutrum
					ultricies euismod. Sed dapibus vestibulum ultrices. Nunc malesuada ac elit quis euismod. Suspendisse nisl
					diam, tristique in placerat ac, aliquet tincidunt nunc. Aliquam dignissim ex vitae fringilla feugiat. Praesent
					dapibus tellus non justo porttitor, eget dignissim justo cursus. Nunc metus augue, ornare ac varius at, varius
					eu lorem. Sed efficitur felis a tortor semper, eget posuere dolor convallis. Nam ut ipsum eu nibh tincidunt
					malesuada in nec ante. Vivamus augue turpis, iaculis quis ipsum eu, pellentesque pretium nulla.
				</div> */}
			</div>
		</div>
	);
}
