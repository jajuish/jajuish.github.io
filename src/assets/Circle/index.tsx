import React from 'react';
// import { paginationCircleSize } from '../utils/constants';

import "./styles.scss";

interface ICircle {
	// size: paginationCircleSize,
	active: boolean;
	darkBg: boolean;
}
export default function Circle({ active, darkBg }: ICircle) {
	return (
		<div 
			className={`circle
			${darkBg ? "circle-light circle-hover-light" : "circle-dark circle-hover-dark"}
			${active ? (darkBg ? "circle-active-light": "circle-active-dark") : ""}
			`} 
		/>
	)
}