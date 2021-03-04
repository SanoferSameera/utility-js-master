const max = require('./max');
describe('Max', () => {

    it('max of [1,2,3,4] is 4', () => {
        expect(max([1,2,3,4],4)).toEqual(4);
    });
    it('Max of the list [4,3,2,1]', () => {
        expect(max([4,3,2,1],4)).toEqual(4);
    }); 

})