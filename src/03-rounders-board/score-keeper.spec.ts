import { expect } from "chai";
import { Team, ScoreKeeper, OutKeeper, ScoreBoard } from "./score-keeper";

describe("ScoreKeeper", () => {
  it("should print CheddarCheese 30, WedmoreWarriors 32", () => {
    // initialising state...
    const home = Team.CheddarCheese;
    const away = Team.WedmoreWarriors;
    const outKeeper = new OutKeeper(home, away);
    const scoreKeeper = new ScoreKeeper(home, away, outKeeper);
    const scoreBoard = new ScoreBoard(home, away, scoreKeeper, outKeeper);

    // grouping of sample inputs
    scoreKeeper.score(Team.CheddarCheese, 1);
    scoreKeeper.score(Team.CheddarCheese, 1);
    scoreKeeper.score(Team.CheddarCheese, 1);

    // Keeping track of expected and actual ouput
    const cheddar3Runs = `CheddarCheese = 3\tWedmoreWarriors = 0\t`;
    expect(scoreKeeper.totals()).to.equal(cheddar3Runs);

    // grouping of sample inputs
    scoreKeeper.score(Team.CheddarCheese, 4);
    scoreKeeper.score(Team.CheddarCheese, 2);
    outKeeper.out(Team.CheddarCheese);
    scoreKeeper.score(Team.CheddarCheese, 2);
    scoreKeeper.score(Team.CheddarCheese, 1);

    // Keeping track of expected and actual ouput
    const cheddar12Runs = `CheddarCheese = 12\tWedmoreWarriors = 0\t`;
    expect(scoreKeeper.totals()).to.equal(cheddar12Runs);

    // grouping of sample inputs
    scoreKeeper.score(Team.CheddarCheese, 4);
    scoreKeeper.score(Team.CheddarCheese, 4);
    scoreKeeper.score(Team.CheddarCheese, 3);
    scoreKeeper.score(Team.CheddarCheese, 2);
    scoreKeeper.score(Team.CheddarCheese, 2);
    outKeeper.out(Team.CheddarCheese);
    scoreKeeper.score(Team.CheddarCheese, 2);
    scoreKeeper.score(Team.CheddarCheese, 1);
    outKeeper.out(Team.CheddarCheese);

    // Keeping track of expected and actual ouput
    const cheddar30Runs = `CheddarCheese = 30\tWedmoreWarriors = 0\t`;
    expect(scoreKeeper.totals()).to.equal(cheddar30Runs);

    // grouping of sample inputs
    scoreKeeper.score(Team.WedmoreWarriors, 1);
    scoreKeeper.score(Team.WedmoreWarriors, 2);
    outKeeper.out(Team.WedmoreWarriors);
    scoreKeeper.score(Team.WedmoreWarriors, 4);
    scoreKeeper.score(Team.WedmoreWarriors, 2);
    scoreKeeper.score(Team.WedmoreWarriors, 4);
    scoreKeeper.score(Team.WedmoreWarriors, 1);
    outKeeper.out(Team.WedmoreWarriors);
    scoreKeeper.score(Team.WedmoreWarriors, 4);
    scoreKeeper.score(Team.WedmoreWarriors, 2);
    scoreKeeper.score(Team.WedmoreWarriors, 1);
    scoreKeeper.score(Team.WedmoreWarriors, 4);
    scoreKeeper.score(Team.WedmoreWarriors, 4);
    scoreKeeper.score(Team.WedmoreWarriors, 3);

    // Final Score
    const expectedResult = `CheddarCheese = 30\tWedmoreWarriors = 32\t`;
    expect(scoreKeeper.totals()).to.equal(expectedResult);

    // Scoreboard displaying the final result (includes both the runs and outs)
    const expectedScoreBoardResult = `Home\tCheddarCheese\nRuns\t30\nOuts\t3\nvs\nAway\tWedmoreWarriors\nRuns\t32\nOuts\t2\n`;
    expect(scoreBoard.totals()).to.equal(expectedScoreBoardResult);
  });
});
