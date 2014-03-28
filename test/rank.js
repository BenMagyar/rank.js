var expect = require('expect.js');
var ranker = require('../lib/rank.js');

describe('Fractional Ranking', function() {
	it('should provide the the standard ranking when no duplicates', function(){
		expect(ranker.fractional([{ x : 1},{x : 2},{x : 3}], 'x')).
			to.eql([{ x : 1, rank : 1},{x : 2, rank : 2},{x : 3, rank : 3}]);
	});

	it('should provide the the standard ranking when no duplicates', function(){
		expect(ranker.fractional([{ x : 2},{x : 1},{x : 3}], 'x')).
			to.eql([{ x : 1, rank : 1},{x : 2, rank : 2},{x : 3, rank : 3}]);
	});

	it('should provide handle floats', function(){
		expect(ranker.fractional([{ x : 1.23},{x : 3.123},{x : 2.43}], 'x')).
			to.eql([{ x : 1.23, rank : 1},{x : 2.43, rank : 2},{x : 3.123, rank : 3}]);
	});
});
