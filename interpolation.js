window.onload = function() {
	document.getElementById("interpolate").onsubmit = function() {
		var results = document.getElementById("results")
		var num1 = document.getElementById("num1").value;
		var num2 = document.getElementById("num2").value;
		var stepNum = document.getElementById("step-num").value;

		var nums = interpolate(num1, num2, stepNum);

		var result = document.createElement("p");
		var numsText = "", numsLength = nums.length;
		for (var i=0; i<numsLength; i++) {
			numsText += nums[i];
			if (i !== numsLength-1){
				numsText += ", "
			}
		}
		var textResult = document.createTextNode(numsText);
		result.appendChild(textResult);

		document.getElementById("results").appendChild(result);
	};
};

function interpolate(num1, num2, stepNum) {
	var d = num2-num1;
	var step = d/stepNum;
	var nums = [num1];
	for (var i=1; i<stepNum; i++){
		var nextNum = ((num1*1)+(i*step));
		nums.push(nextNum);
	}
	nums.push(num2);
	return nums
}
