const findSum = require('../problems/findsuminarray.js')
const assert = require('assert');


describe('Find sum in array', function () {
    
    it('should find a sum', function () {
        assert.equal(findSum([10, 15, 3, 7], 17), true);
    });

    it('should not find a sum', function () {
        assert.equal(findSum([10, 15, 3, 8], 17), false);
    });

});
   