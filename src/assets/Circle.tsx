import React from 'react';
import { paginationCircleSize } from '../utils/constants';

interface ICircle {
	size: paginationCircleSize,
	fill: boolean;
	colour: string;
}
export default function Circle({ size = paginationCircleSize.medium, fill, colour }: ICircle) {
	return (
		<svg width={size} height={size}>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={fill ? (size / 2) : ((size / 2) - 1)}
				fill={fill ? colour : "none"}
				stroke={fill ? "none" : colour}
				strokeWidth={fill ? 0 : 2}
			/>
		</svg>
	)
}