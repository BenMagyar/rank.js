// Standard Ranking
exports.standard = function(array, key) {
	// sort the array
	array = array.sort(function(a, b) {
		var x = a[key];
		var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
	// assign a naive ranking 
	for (var i = 1; i < array.length + 1; i++) {
		array[i-1]['rank'] = i;
	}
	return array;
}

// Fractional Ranking
// A faster way exists but this works for now
exports.fractional = function(array, key) {
	array = this.standard(array, key);
	// now apply fractional
	var pos = 0;
	while (pos < array.length) {
		var sum = 0; var i = 0;
		for (i = 0; array[pos+i+1] && (array[pos+i][key] === array[pos+i+1][key]); i++) {
			sum += array[pos+i]['rank'];
		}
		sum += array[pos+i]['rank'];
		var endPos = pos + i + 1;
		for (pos; pos < endPos; pos++) {
			array[pos]['rank'] = sum/(i+1);
		}
		pos = endPos;
	}
	return array;
}

