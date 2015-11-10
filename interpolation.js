window.onload = function() {
	var another = true;
	var results = document.getElementById("results");
	while(another){
		var num1 = null, num2 = null, stepNum = null;
		while (num1 == null){
			num1 = window.prompt("Input first number: ", "");
		}
		while (num2 == null){
			num2 = window.prompt("Input second number: ", "");
		}
		while (stepNum == null){
			stepNum = window.prompt("Input step number: ", "3");
		}
		var nums = interp(num1, num2, stepNum);

		var result = document.createElement("p");
		var textResult = document.createTextNode(nums);
		result.appendChild(textResult);

		document.getElementById("results").appendChild(result);

		another = window.confirm("The sequence of numbers is:\n\n"+nums+"\n\nTo interpolate between more numbers, hit OK, otherwise hit Cancel");
	}
}


function interp(num1, num2, stepNum) {
	var d = num2-num1;
	var step = d/stepNum;
	var nums = [num1];
	for (var i=1; i<stepNum; i++){
		var nextNum = ((num1*1)+(i*step));
		nums.push(nextNum);
	}
	nums.push(num2);
	return nums

