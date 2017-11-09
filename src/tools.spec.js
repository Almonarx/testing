import { sum } from './tools';
import chai from 'chai';
const { assert, expect } = chai;
chai.should();

describe('summary func testing', () => {
    it('should return 5 for sum(2, 3)', () => {
        expect(sum(2, 3)).to.equal(5);
    });

    it('should return 2 for sum(2, 0)', () => {
        sum(2, 0).should.equal(2);
    });

    it('empty string equals 0', () => {
        assert.equal('', 0);
    });

    it('empty string equals 0', () => {
        expect(sum()).to.equal(0);
    });
});