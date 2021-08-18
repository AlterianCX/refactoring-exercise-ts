/**
 * Requirements:
 * - an interface `Scores` with the following methods:
 *   + `wedmoreAddScore`
 *   + `awayTeamAddScore`
 *   + `wedmoreAddOut`
 *   + `awayTeamAddOut`
 *   + `ScoreCard`
 *
 * - a class `ScoreKeeper` that implements the `Scores` interface
 * - properties on `ScoreKeeper` should be strictly private
 */
export interface Scores {
	wedmoreAddScore(score: number): void;
	wedmoreAddOut(out: number): void;
	awayTeamAddScore(score: number): void;
	awayTeamAddOut(out: number): void;
	ScoreCard(): string;
}
export class ScoreKeeper {
	#wedmoreScore: number;
	#awayTeamScore: number;
	#wedmoreOut: number;
	#awayTeamOut: number;
	constructor() {
		this.#wedmoreScore = 0;
		this.#wedmoreOut = 0;
		this.#awayTeamScore = 0;
		this.#awayTeamOut = 0;
	}
	addWedmoreScore(score: number): void {
		if (score > 4 || score <= 0) {
			throw new Error("Score must be 1-4");
		} else if (this.#wedmoreOut >= 3) {
			throw new Error("Cannot score with more than 3 outs");
		}
		this.#wedmoreScore += score;
	}
	addWedmoreOut(): void {
		if (this.#wedmoreOut > 3) {
			throw new Error("Already has 3 outs");
		}
		this.#wedmoreOut++;
	}
	addAwayTeamScore(score: number): void {
		if (score > 4 || score <= 0) {
			throw new Error("Score must be 1-4");
		} else if (this.#awayTeamOut >= 3) {
			throw new Error("Cannot score with more than 3 outs");
		}
		this.#awayTeamScore += score;
	}
	addAwayTeamOut(): void {
		if (this.#awayTeamOut > 3) {
			throw new Error("Already has 3 outs");
		}
		this.#awayTeamOut++;
	}
	ScoreCard(): string {
		return `Wedmore: ${this.#wedmoreScore}\nAway: ${this.#awayTeamScore}`;
	}
}
