
/**
 * function that greets the name passed in. If no name is passed in it greets 'world'
 * @returns { string } 
 */
function greet(name) {

	let x = (!name) ? 'hello world' : 'hello ' + name;
	return x;
}

console.log(greet());
console.log(greet('javascript'));
