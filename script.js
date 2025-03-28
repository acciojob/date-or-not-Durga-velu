var isDate = function (input) {
  //   write your code here
	let ans=new Date(input)
	
	if(ans.toString() !=="Invalid Date" && !isNaN(ans)){
		return true
	}
	else{
		
		return false
	}
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
