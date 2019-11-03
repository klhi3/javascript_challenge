
/**
 * function that returns an array of values following foo-bar rules:
 *  - if the number is divisible by 3, add 'foo'
 *  - if the number is divisible by 5, add 'bar'
 *  - if the number is divisible by both 3 and 5, add 'foobar'
 *  - otherwise, add the number
 * 
 * @returns { [] } 
 */
function foobar(num) {
	let list = [];
	let x3, x5;
	
	for (i=1; i <= num;  ++i) {
	   x3 = i % 3, 
	   x5 = i % 5;

	   let y = (!x3) ? 'foo' : '';
	   y = (!x5) ? y + 'bar' : ((x3 && x5) ? i : y);

		list.push(y);
	}
	return list;
}


console.log(foobar(15));