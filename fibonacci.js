
/**
 * 
 * @param num - input for fibonacci sequence
 */
export default function fibonacci(num) {

	var arr = [0,1];
	var fn_1=arr[0], fn_2=arr[1];
	var f = fn_1 + fn_2;
  
	while (f <= num) {
             
		fn_2 = fn_1;
		fn_1 = f;  
		f = fn_1 + fn_2;  
		if (f<=num) arr.push(f);      
	}
	return arr;

	// throw Error(`Unimplented: solve for ${ num }`);
}
