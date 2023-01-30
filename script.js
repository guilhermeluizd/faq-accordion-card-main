var answer_1 = document.getElementById("answer_1");
var answer_2 = document.getElementById("answer_2");
var answer_3 = document.getElementById("answer_3");
var answer_4 = document.getElementById("answer_4");
var answer_5 = document.getElementById("answer_5");

var question_1 = document.getElementById("question_1");
var question_2 = document.getElementById("question_2");
var question_3 = document.getElementById("question_3");
var question_4 = document.getElementById("question_4");
var question_5 = document.getElementById("question_5");

var arrow_question_1 = document.getElementById("arrow_question_1");
var arrow_question_2 = document.getElementById("arrow_question_2");
var arrow_question_3 = document.getElementById("arrow_question_3");
var arrow_question_4 = document.getElementById("arrow_question_4");
var arrow_question_5 = document.getElementById("arrow_question_5");

var questions_general = document.querySelectorAll(".question");

var answers = [answer_1, answer_2, answer_3, answer_4, answer_5];
var questions = [question_1, question_2, question_3, question_4, question_5];
var arrow_question = [arrow_question_1, arrow_question_2, arrow_question_3, arrow_question_4, arrow_question_5];

var numberQuestionClick = 5;
var lastClicked = 5;

for(number=0; number<5; number++){
	answers[number].style.display = 'none';
}

document.addEventListener('mousedown', (event)=> {
	numberQuestionClick = 5;
	for(number=0; number<5; number++){
		if(questions_general[number].contains(event.target)){
			numberQuestionClick = number;

			answers[number].style.display = 'none';
			arrow_question[number].style.transform = "rotate(0deg)";
			questions[number].style.fontWeight="400";
		}
	}

	if(numberQuestionClick==lastClicked){
		lastClicked = 5;
	}

	else{
		if(numberQuestionClick==0){
			answer_1.style.display = 'flex';
			arrow_question_1.style.transform = "rotate(180deg)";
			question_1.style.fontWeight="700";

			lastClicked = 0;
		}
		else if(numberQuestionClick==1){
			answer_2.style.display = 'flex';
			arrow_question_2.style.transform = "rotate(180deg)";
			question_2.style.fontWeight="700";

			lastClicked = 1;
		}
		else if(numberQuestionClick==2){
			answer_3.style.display = 'flex';
			arrow_question_3.style.transform = "rotate(180deg)";
			question_3.style.fontWeight="700";

			lastClicked = 2;
		}
		else if(numberQuestionClick==3){
			answer_4.style.display = 'flex';
			arrow_question_4.style.transform = "rotate(180deg)";
			question_4.style.fontWeight="700";

			lastClicked = 3;
		}
		else if(numberQuestionClick==4){
			answer_5.style.display = 'flex';
			arrow_question_5.style.transform = "rotate(180deg)";
			question_5.style.fontWeight="700";

			lastClicked = 4;
		}
	}
})