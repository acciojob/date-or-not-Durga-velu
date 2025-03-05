var isDate = function (input) {
  //   write your code here
	let ans=new Date(input)

	if(input.toString() !=="Invalid Date" && !isNaN(input)){
		return true
	}
	else{
		return false
	}
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
