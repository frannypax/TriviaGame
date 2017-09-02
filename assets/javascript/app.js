
$( document ).ready(function() {


var score =0;
var answers = ["a", "b", "DC","True", "c"];
var total=answers.length
console.log(total);
// 


$('input[type="button"][value="Submit Answers"]').click(function(){
//function to get submit form on completion

	//getting user inputs
	var question1 = document.forms["quizForm"]["question1"].value;
	var question2 = document.forms["quizForm"]["question2"].value;
	var question3 = document.forms["quizForm"]["question3"].value;
	var question4 = document.forms["quizForm"]["question4"].value;
	var question5 = document.forms["quizForm"]["question5"].value;


	//validating the form
	for (var i=1; i<=total; i++){
		if( eval("question" + i) == null || eval("question" + i) == ""){
			//eval is being used to output question1, question2, etc.
			alert("Please answer question " + i)
			return false;
		}
	}

	//calculating score
	for (var i=1; i<=total; i++){
	if( eval("question" + i) == answers[i-1]){
		score++;
	}
	}

	// displaing results in results to html
	var results = $("#results");
	$("<h3> Total Score: " + score + " out of " + total + "</h3>").appendTo(results);
	// $("#results").append("<h3> Total Score: " + score + " out of " + total + "</h3>");

	return false;

});



	$('input[type="button"][value="Start Quiz"]').click(function(){
		//function to countdown Time
		var timeLeft = 30;
		var displayTime = $("#timeRemaining").html("<h4 style=color:red>" + timeLeft+ " Seconds Remaining.</h4>");
		var timerId = setInterval(countdown, 1000);

		function countdown() {
	 	if (timeLeft == 0) {
		    clearTimeout(timerId);
		    alert("Your time's Up");
		 	}else {
			    displayTime = timeLeft + ' seconds remaining';
			    timeLeft--;
			    $("#timeRemaining").html("<h4 style=color:red>" + timeLeft+ " Seconds Remaining.</h4>");
		  	}
		};


	});




});