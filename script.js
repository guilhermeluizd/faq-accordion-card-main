function showHide(answer, question, arrow){
	var answer = document.querySelector(answer);
	var question = document.querySelector(question);
	var arrow = document.querySelector(arrow);

	answer.classList.toggle("ativo_answer");
	question.classList.toggle("ativo_question");
	arrow.classList.toggle("ativo_arrow");
}
