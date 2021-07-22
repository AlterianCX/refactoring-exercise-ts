export enum Team {
  WedmoreWarriors = "WedmoreWarriors",
  CheddarCheese = "CheddarCheese",
}

interface ITeamCounter {
  [team: string]: number;
}

abstract class AbstractKeeper {
  protected teamCounter: ITeamCounter;

  constructor(home: Team, away: Team) {
    this.teamCounter = {
      [home]: 0,
      [away]: 0,
    };
  }

  public totals(): string {
    let msg: string = "";

    for (const teamName in this.teamCounter) {
      msg += `${teamName} = ${this.teamCounter[teamName]}\t`;
    }

    return msg;
  }

  public get counter(): ITeamCounter {
    return this.teamCounter;
  }
}

export class ScoreKeeper extends AbstractKeeper {
  private outKeeper: OutKeeper;

  constructor(home: Team, away: Team, outKeeper: OutKeeper) {
    super(home, away);
    this.outKeeper = outKeeper;
  }

  public score(teamName: Team, points: number): void {
    if (!this.isValidPoint(points))
      throw new Error("Not a valid number of points");

    if (!this.outKeeper.isAllowedToBat(teamName))
      throw new Error(`${teamName} is no longer allowed to bat`);

    this.teamCounter[teamName] += points;
  }

  private isValidPoint(points: number): boolean {
    return points > 0 && points <= 4;
  }
}

export class OutKeeper extends AbstractKeeper {
  public out(teamName: Team): void {
    if (!this.isAllowedToBat(teamName))
      throw new Error(`${teamName} is no longer allowed to bat`);

    this.teamCounter[teamName] += 1;
  }

  public isAllowedToBat(teamName: Team): boolean {
    return this.teamCounter[teamName] < 3;
  }
}

export class ScoreBoard {
  private home: Team;
  private away: Team;
  private scoreKeeper: ScoreKeeper;
  private outKeeper: OutKeeper;

  constructor(
    home: Team,
    away: Team,
    scoreKeeper: ScoreKeeper,
    outKeeper: OutKeeper
  ) {
    this.home = home;
    this.away = away;
    this.scoreKeeper = scoreKeeper;
    this.outKeeper = outKeeper;
  }

  private partialScoreBoard(
    ownVenue: boolean,
    teamName: Team,
    runs: number,
    outs: number
  ): string {
    let msg: string = `${ownVenue ? "Home" : "Away"}\t${teamName}\n`;
    msg += `Runs\t${runs}\n`;
    msg += `Outs\t${outs}\n`;

    return msg;
  }

  public totals(): string {
    const runs: ITeamCounter = this.scoreKeeper.counter;
    const outs: ITeamCounter = this.outKeeper.counter;
    const home: Team = this.home;
    const away: Team = this.away;

    let scoreBoard: string = this.partialScoreBoard(
      true,
      home,
      runs[home],
      outs[home]
    );

    scoreBoard += "vs\n";

    scoreBoard += this.partialScoreBoard(false, away, runs[away], outs[away]);

    return scoreBoard;
  }
}
