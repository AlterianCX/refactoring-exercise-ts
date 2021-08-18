import assert from "assert";
import { manhattan } from "./manhattan";

describe("manhattan()", () => {
	it("should return the Manhattan distance between two points", () => {
		assert.equal(manhattan(1, 2, 3, 4), 4);
		assert.equal(manhattan(0, 0, 6, 6), 12);
		assert.equal(manhattan(0, 0, 0, 0), 0);
		assert.equal(manhattan(0, 0, -1, -1), 2);
	});
});
