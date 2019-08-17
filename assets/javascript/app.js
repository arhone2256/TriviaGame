
$(document).ready(function(){

    const quizQuestions = [
        {
            question: "What is the largest bone in the human body?",
            choices: ["Rhone Bone", "Femur", "Skull", "Tibula"],
            correctAnswer:   3
        },
        {
            question: "Who was the greek god of dreams?",
            choices: [ "Zues", "Morpheus", "Alex", "Frankinstein"],
            correctAnswer: 1
        },
        {
            question: "What is the name of the fairy in peter pan?",
            choices: ["Tinker Bell", "Pinky", "Ruby", "Sparkles"],
            correctAnswer: 0
        },
        {
            question: "Who was the first American to go into space?",
            choices: [ "Alex Rhone", "Luke Skywalker", "Ted", "Alan Sheperd"],
            correctAnswer: 3
        },
        {
            question: "What color is a tomato?",
            choices: ["green", "red", "blue", "pink"],
            correctAnswer: 1
        },
    
    ];

    $('#btnStart').on('click', function() {
       $('#btnStart').hide()

       // load question(s)
        loadQuestion();
    });

    function loadQuestion(){
        counter = 30;
        timer = setInterval(countDown, 1000);

        const question = quizQuestions[currentQuestion].question;//
        const choices = quizQuestions[currentQuestion].choices;//
        const answer = quizQuestions[currentQuestion].correctAnswer;//
    
        $('#time').html('timer' + counter)
        $('#game').html(`<h4>${question}</h4>${loadChoices(choices, answer)}`);

        $('.choice').on('click', function() {
           
         });

    }

    function loadChoices(choices, answer){
        let result = '';

        for ( var i = 0; i < choices.length; i++){
            result = result + `<p class = "choice" data-answer="${answer}">${choices[i]}</p>`;
        }
        
        return result;
    }


        // start timer
// Timer 
var counter = 30;
//Pull 1st question from array
var currentQuestion = 0;
var score = 0;
// incremnt wrong question
var lost =0;
var timer;

function nextQuestion(){

   if (isQuestionOver){
   }else
    currentQuestion++;
    loadQuestion();
}
// Start a 30 second timer 
function timeUp(){
    clearInterval(timer);

    // Did they answer the question? Did they get it correct?


    nextQuestion();
}

function countDown(){
   counter--;

   $("#time").html("Timer: " + counter);
   if ( counter === 0){
       timeUp();
   }
}
    });
    
    $('#btnRestart').on('click', function() {
        alert('clicked');
        $('#btnStart').show()
     
    });








