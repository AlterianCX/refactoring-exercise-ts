describe("Manhattan Distance", () => {});
import { expect } from "chai";
import Point from "./manhattan-distance";

describe("Manhattan Distance", () => {
  it("should return 12 as the distance between Point(0,0) and Point(6,6)", () => {
    const expectedResult = 12;

    // initialising state...
    const v0 = new Point(0, 0);
    const v1 = new Point(6, 6);

    const actualResult = v0.distance(v1);

    expect(actualResult).to.equal(expectedResult);
  });
});
