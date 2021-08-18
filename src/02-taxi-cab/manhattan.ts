/**
 * Requirements:
 * - A function `manhattan` which computes the manhattan distance between two points
 */

export const manhattan = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};
