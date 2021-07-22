class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(other: Point): number {
    return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
  }
}

export default Point;
