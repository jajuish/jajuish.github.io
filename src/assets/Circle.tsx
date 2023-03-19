import React from 'react';
// import { paginationCircleSize } from '../utils/constants';

import "./styles.scss";

interface ICircle {
	// size: paginationCircleSize,
	fill: boolean;
	// colour: string;
}
export default function Circle({ fill }: ICircle) {
	return (
		<div className={`circle ${fill ? "circle-fill" : ""}`} />
	)
}