import assert from "assert";
import { ScoreKeeper } from "./score-keeper";

describe("ScoreKeeper", () => {
	const scores = new ScoreKeeper();
	it("should have 0 public properties", () => {
		assert.equal(Object.keys(scores).length, 0);
	});
	describe("#ScoreCard()", () => {
		it("Should start with a score card of 0-0", () => {
			assert.equal(scores.ScoreCard().match(/^[\s|\S]*0[\s|\S]+0[\s|\S]*$/).index, 0);
		});
	});
	describe("#addWedmoreScore()", () => {
		it("Should add 1 for a score of 1-0", () => {
			scores.addWedmoreScore(1);
			assert.equal(scores.ScoreCard().match(/^[\s|\S]*1[\s|\S]+0[\s|\S]*$/).index, 0);
		});
		it("should reject values > 4 or <= 0", () => {
			assert.throws(() => {
				scores.addWedmoreScore(5);
			});
			assert.throws(() => {
				scores.addWedmoreScore(-1);
			});
		});
	});
	describe("#addAwayTeamScore()", () => {
		it("Should add 1 for a score of 1-1", () => {
			scores.addAwayTeamScore(1);
			assert.equal(scores.ScoreCard().match(/^[\s|\S]*1[\s|\S]+1[\s|\S]*$/).index, 0);
		});
		it("should reject values > 4 or <= 0", () => {
			assert.throws(() => {
				scores.addAwayTeamScore(5);
			});
			assert.throws(() => {
				scores.addAwayTeamScore(-1);
			});
		});
	});
	describe("#addWedmoreOut()", () => {
		it("Should add 3 times before reject adding a score", () => {
			scores.addWedmoreOut();
			assert.doesNotThrow(() => {
				scores.addWedmoreScore(1);
			});
			scores.addWedmoreOut();
			assert.doesNotThrow(() => {
				scores.addWedmoreScore(1);
			});
			scores.addWedmoreOut();
			assert.throws(() => {
				scores.addWedmoreScore(1);
			});
		});
	});
	describe("#addAwayTeamOut()", () => {
		it("Should add 3 times before reject adding a score", () => {
			scores.addAwayTeamOut();
			assert.doesNotThrow(() => {
				scores.addAwayTeamScore(1);
			});
			scores.addAwayTeamOut();
			assert.doesNotThrow(() => {
				scores.addAwayTeamScore(1);
			});
			scores.addAwayTeamOut();
			assert.throws(() => {
				scores.addAwayTeamScore(1);
			});
		});
	});
});
