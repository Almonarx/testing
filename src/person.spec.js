import chai from 'chai';
import { Person } from './Person';
const { expect } = chai;

describe('class Person', () => {
    let person;

    beforeEach(() => person = new Person());

    it('Should create instance with name', () => {
        const title = 'Taras';

        expect(new Person(title).name).to.equal(title);
    });

    it('Should create instance with default name', () => {
        expect(person).to.have.own.property('name');
        expect(person.name).to.exist;
    });

    it('should create date', () => expect(person.creation).to.be.an.instanceof(Date));

    it('should get name', () => expect(person.getName()).to.equal(person.name));

    it('should set name', () => {
        const test = 'test';

        person.setName(test);
        expect(person.name).to.equal(test);
    });

    it('should return appropriate text on getCreation()', () => {
        const tests = [
            {hour: 23, text: 'night child'}, {hour: 7, text: 'morning child'},
            {hour: 12, text: 'day child'}, {hour: 20, text: 'evening child'}
        ];

        tests.forEach(({hour, text}) => {
            person.creation.setHours(hour);
            expect(person.getCreation()).to.equal(text);
        });
    });
});
