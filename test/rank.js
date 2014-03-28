var expect = require('expect.js');
var rank = require('../lib/rank.js');

describe('Standard Ranking', function(){
	it('should rank ascending order for nonduplicates', function(){
		expect(rank.standard([{ x : 1},{x : 3},{x : 2}], 'x')).
			to.eql([{ x : 1, rank : 1},{x : 2, rank : 2},{x : 3, rank : 3}]);
	});

	it('should rank asending order even if there are duplicates', function(){
		expect(rank.standard([{ x : 1},{x : 3},{x : 1}], 'x')).
			to.eql([{ x : 1, rank : 1},{x : 1, rank : 2},{x : 3, rank : 3}]);
	});

	it('should provide the same ranking no matter the order', function(){
	expect(rank.standard([{ x : 1},{x : 3},{x : 1}], 'x')).
				to.eql(rank.standard([{ x : 3},{x : 1},{x : 1}], 'x'));
		});
});

describe('Fractional Ranking', function(){
	it('should provide the the standard ranking when no duplicates', function(){
		expect(rank.fractional([{ x : 1},{x : 2},{x : 3}], 'x')).
			to.eql([{ x : 1, rank : 1},{x : 2, rank : 2},{x : 3, rank : 3}]);
	});

	it('should not provide the the standard ranking when there are duplicates', function(){
		expect(rank.fractional([{ x : 2},{x : 2},{x : 3}], 'x')).
			not.to.eql(rank.standard([{ x : 2},{x : 2},{x : 3}], 'x'));
	});

	it('should provide handle floats', function(){
		expect(rank.fractional([{ x : 1.23},{x : 3.123},{x : 2.43}], 'x')).
			to.eql([{ x : 1.23, rank : 1},{x : 2.43, rank : 2},{x : 3.123, rank : 3}]);
	});

	it('should provide the same rank for same valued elements', function(){
		expect(rank.fractional([{x : 1},{x : 1},{x : 1}], 'x')).
			to.eql([{x : 1, rank : 2},{x : 1, rank : 2},{x : 1, rank : 2}]);
	});
});
