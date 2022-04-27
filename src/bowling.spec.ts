import {Game} from "./bowling";
import {expect} from 'chai';

describe('Bowling Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should return 0 for an unstarted game', () => {
        expect(game.score).to.equal(0); //check that the score = 0
    });

    it('should return 0 for a game of all zeros', () => {
        new Array(20).fill(0).forEach(game.roll);

        expect(game.score).to.equal(0); //check that the score = 0
    });

    it('should return 20 for a game of all 1s', () => {
        new Array(20).fill(1).forEach(game.roll);

        expect(game.score).to.equal(20); //check that the score = 0
    });

    it('should return 40 for a game of all 2s', () => {
        new Array(20).fill(2).forEach(game.roll);

        expect(game.score).to.equal(40); //check that the score = 0
    });

    it('should return 12 handling a spare', () => {
        const rolls = [ 5, 5, 1, 0, 0 ];

        rolls.forEach(game.roll);

        expect(game.score).to.equal(12);
    });

    it('should return 14 handling a strike', () => {
        const rolls = [ 10, 1, 1, 0, 0 ];

        rolls.forEach(game.roll);

        expect(game.score).to.equal(14);
    });

    it('should return 28 for a partial game of 2 frames, with one strike', () => {
        const rolls = [ 10, 3, 6 ];
        rolls.forEach(game.roll);

        expect(game.score).to.equal(28);
    });

    it('should return 46 for a partial game of 3 frames, with two strikes', () => {
        const rolls = [ 10, 10, 4,  2];
        rolls.forEach(game.roll);

        expect(game.score).to.equal(46);
    });

    it('should return 133 for a full game with half strikes, strikes and a final 10th game', () => {
        const rolls = [ 1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6 ];
        rolls.forEach(game.roll);

        expect(game.score).to.equal(133);
    });

    it('should return 300 for the perfect game', () => {
        new Array(12).fill(10).forEach(game.roll);

        expect(game.score).to.equal(300);
    });
});
