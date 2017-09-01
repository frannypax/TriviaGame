
// $( document ).ready(function() {
// 
// 


var score =0;
var answers = ["a", "b", "DC","True", "c"];
var total=answers.length
console.log(total);
// 
function init(){
	var total;
	totalTime=30000;
	checkTime();
	$("#results").empty()
};

//function to countdown Time
var totalTime=30000;
totalTime=parseInt(totalTime);
function checkTime(){
	
	$("#timeRemaining").html(totalTime);

	if (totalTime == 0){
		alert("Time's Up; you got " + score + " questions right. \n\n\n\n Click OK to restart quiz");
		// setTimeout("submitAnswers()",1);
		setTimeout("init()",1);
	}else{
		totalTime=totalTime - 1000;
		setTimeout("checkTime()",1000);
	}
};
setTimeout("checkTime()", 1000);




//function to get submit form on completion
function submitAnswers(){

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


};

$(":button").click(function(){
    alert("You scored " + score + " out of "+ total + ".");
    init();


});




// });