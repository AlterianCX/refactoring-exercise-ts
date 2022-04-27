class Score {
    pinsKnockedDown: number;
    frame: number;
    roll: number;

    previousScore?: Score;
    nextScore?: Score;

    constructor(pinsKnockedDown: number, previousScore?: Score) {
        this.pinsKnockedDown = pinsKnockedDown;
        this.previousScore = previousScore;

        if (!previousScore) {
            this.frame = 1;
            this.roll = 1;
        } else {
            this.frame = !previousScore.#endOfFrame ? previousScore.frame : previousScore.frame + 1;
            this.roll = this.frame === previousScore.frame ? previousScore.roll + 1 : 1;
            previousScore.nextScore = this;
        }
    }

    get value(): number {
        if (!this.#bonusStrike) {
            return this.pinsKnockedDown;
        } else if (this.#halfStrike) {
            return this.pinsKnockedDown + this.#halfStrikeBonus;
        } else if (this.#strike) {
            return this.pinsKnockedDown + this.#fullStrikeBonus;
        }
    }

    get #strike(): boolean {
        return this.pinsKnockedDown === 10;
    }

    get #halfStrike(): boolean {
        if (this.roll === 1) {
            return false;
        } else {
            return this.pinsKnockedDown + this.previousScore.pinsKnockedDown === 10;
        }
    }

    get #bonusStrike(): boolean {
        return this.#strike || this.#halfStrike;
    }

    get #endOfFrame(): boolean {
        return !this.#lastFrame ? (this.#strike || this.roll === 2) :
            (this.roll === 3 || this.roll === 2 && !this.#bonusStrike);
    }

    get #halfStrikeBonus(): number {
        return this.#lastFrame ? 0 :
            this.nextScore?.pinsKnockedDown ?? 0;
    }

    get #fullStrikeBonus(): number {
        return this.#lastFrame ? 0 :
            this.#halfStrikeBonus + (this.nextScore?.nextScore?.pinsKnockedDown ?? 0);
    }

    get #lastFrame(): boolean {
        return this.frame === 10;
    }
}

export class Game {
    scores: Score[];

    constructor() {
        this.scores = [];
    }

    get score(): number {
        return this.scores.reduce((sum, score) => sum + score.value, 0);
    }

    roll = (numberOfPinsKnockedDown: number) => {
        this.scores.push(new Score(numberOfPinsKnockedDown, this.scores[this.scores.length - 1]));
    }
}

