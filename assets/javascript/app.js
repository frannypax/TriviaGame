
// $( document ).ready(function() {

//set total quiz time 
setTimeout(function(){
	submitAnswers();
	 },5000);

// var finishEarly = clearTimeout(timeUp);

function submitAnswers(){;

var total =2;
var score =0;
var answers = ["a", "c"];


//getting user inputs
var question1 = document.forms["quizForm"]["question1"].value;
var question2 = document.forms["quizForm"]["question2"].value;

//validating the form
for (var i=1; i<=total; i++){
	if( eval("question" + i) == null || eval("question" + i) == ""){
		//eval is being used to output question1, question2, etc.
		alert("Please answer question " + i)

		return false;
	}
}

//checking answers
// if (question1 == answers[0]){
// 	score = score + 1;
// 	alert(score);
// }
// 
for (var i=1; i<=total; i++){
	if( eval("question" + i) == answers[i-1]){
		score++;

	}

}
// displaing results in results to html
var results = $("#results");
$("<h3> Total Score: " + score + " out of " + total + "</h3>").appendTo(results);




return false;


};

// });