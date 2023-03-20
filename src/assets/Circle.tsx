import React from 'react';
// import { paginationCircleSize } from '../utils/constants';

import "./styles.scss";

interface ICircle {
	// size: paginationCircleSize,
	active: boolean;
	colour?: string;
}
export default function Circle({ active, colour }: ICircle) {
	return (
		<div 
			className={`circle
			${active ? "circle-fill" : ""} 
			`} 
		/>
	)
}