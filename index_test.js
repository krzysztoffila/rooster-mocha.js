//importing assert module using require()
const assert = require('assert');
//importing Rooster module from ../index using require()
const Rooster = require('./index.js');
//writing a describe block for Rooster
describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            //setup:
            const expected = 'cock-a-doodle-doo!';
            //excercise:
            const actual = Rooster.announceDawn();
            //verify: assert method to compare actual and expected result
            assert.equal(actual, expected);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            //setup:
            const input = 4;
            const output = '4';
            //exercise:
            const result = Rooster.timeAtDawn(input);
            //verify: assert method with strict equality:
            assert.equal(result, output);
        });
        it('throws RangeError if the number is less than 0', () => {
            //setup:
            const input = -4;
            const output = RangeError;
            //Exercise + verify: assert.throws() method that checks for thrown errors
            assert.throws(() => {
                Rooster.timeAtDawn(input);
            }, output);
        })
        it('throws RangeError if the number is greater than 23', () => {
            //setup:
            const input = 24;
            const output = RangeError;
            //Exercise + verify: assert.throws() method that checks for thrown errors
            assert.throws(() => {
                Rooster.timeAtDawn(input);
            }, output);
        })
    });
});