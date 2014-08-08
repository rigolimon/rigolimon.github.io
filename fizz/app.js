$(document).ready(function() {

	$("#inputBtn").click(function() {

		var fizzBuzz = function(inputNum) {	
			$("body").find("p").remove();


			for( var i = 1; i <= inputNum; i++){
				if(i%3 === 0 && i%5 === 0) {
					var newElement = $("<p>Finally a Fizz Buzz!</p>");
					newElement.addClass("fizzbuzz");
					$("body").append(newElement);
				}
				else if (i%3 === 0) {
					var newElement = $("<p>Fizz</p>");
					newElement.addClass("fizz");
					$("body").append(newElement);
				}
				else if (i%5 === 0) {
					var newElement = $("<p>Buzz</p>");
					newElement.addClass("buzz");
					$("body").append(newElement);
				}
				else {
					var newElement = $("<p>"+i+"</p>");
					newElement.addClass("default");
					$("body").append(newElement);
				}

			}
		};
		/*function call*/
		fizzBuzz(+$("#inputNumber").val());

	});
	/*End of function*/

});
