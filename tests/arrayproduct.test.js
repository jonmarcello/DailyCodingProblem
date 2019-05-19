const func = require('../problems/arrayproduct.js')
const assert = require('assert');


describe('Sum array', function () {
    
    it('should find a product', function () {
        assert.deepEqual(func([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
    });

    it('should product smaller array', function () {
        assert.deepEqual(func([3, 2, 1]), [2, 3, 6]);
    });

});
   