// does not start until page is ready
$(document).ready(function(){

    //array of questions and choices and answer.
    //object is a blueprint of a class
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

       timer = setInterval(countDown, 1000);
       

       // load question(s)
        loadQuestion();
    });

    function loadQuestion(){
        counter = 30;
        
        if(quizQuestions.length > currentQuestion){
            //timer = setInterval(countDown, 1000);
            let question = quizQuestions[currentQuestion].question;//
            let choices = quizQuestions[currentQuestion].choices;//
            let answer = quizQuestions[currentQuestion].correctAnswer;//
        
            $('#time').html('timer' + counter)
            $('#game').html(`<h4>${question}</h4>${loadChoices(choices, answer)}`);
        
            $('.choice').on('click', function() {

                if(quizQuestions.length -1 > currentQuestion){
                    let chosenAnswer = $(this).attr("data-answer");
    
                    if(chosenAnswer == 'correct'){
                        // alert('You are awesome');
                        wins++;
                    }
                    else{
                        // alert('Wrong');
                        lost++;
                    }
                    
                    nextQuestion();
                }
                else{
                    removeEvent();
                }
             });
        }
        else{
            removeEvent();
        }
    }

    function removeEvent(){
        $('.choice').off('click');
        ShowStats();
        
    }

    function ShowStats(){
        let outPut = 'Correct: ' + wins;
        $("#correct").html(outPut);

        outPut = 'Incorrect: ' + lost;
        $("#incorrect").html(outPut);
    }

    function loadChoices(choices, answer){
        let result = '';

        for ( var i = 0; i < choices.length; i++){

            if(answer == i){
                answer = "correct"
            } 


            
            result = result + `<p class = "choice" data-answer="${answer}">${choices[i]}</p>`;
        }
        
        return result;

        
        

    }

    function reset(){

        clearInterval(timer);
        didReset = true;
        currentQuestion = 0;
        lost = 0;
        wins =0;
        // show start
        $('#btnStart').show()
       
        // clear stats
        $("#correct").html('Correct: 0');
        $("#incorrect").html('Incorect: 0');
        
        nextQuestion();
    }

        // start timer
// Timer 
var counter = 30;
//Pull 1st question from array
var currentQuestion = 0;
var score = 0;
// incremnt wrong question
var lost =0;
var wins = 0;
var timer;
var didReset = false;

function nextQuestion(){

    if(didReset === false){
        currentQuestion++;
    }
    else{
        didReset = false;
    }
    
    ShowStats();

    loadQuestion();
}

// Start a 30 second timer 
function timeUp(){
    clearInterval(timer);
    nextQuestion();
}

$('#btnRestart').on('click', function() {
    alert('clicked');
    $('#btnStart').show()
 
    reset();
});

function countDown(){
   counter--;

    $("#time").html("Timer: " + counter);
        if ( counter === 0){
            timeUp();
        }
    }
});
    
    








