import React, { useState } from "react";
import FontFaceObserver from "fontfaceobserver";

import { AppShelf } from "./components";
import { Home, WorkEx, Projects, Volunteering, Hobbies, Links } from "./pages";
import "./App.scss";

function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const font = new FontFaceObserver("Ubuntu Mono");
	font.load().then(() => {
		setFontsLoaded(true);
	});
	return (
		<div>
			<AppShelf>
				<Home fontsLoaded={fontsLoaded} />
				<WorkEx />
				<Projects />
				<Volunteering />
				<Hobbies />
				<Links />
			</AppShelf>
		</div>
	);
}

export default App;
