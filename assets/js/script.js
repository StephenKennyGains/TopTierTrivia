/** startQuiz Function
 * This Function will start the quiz by removing the start button from 
 * the screen and populate the first question and asnwers from the array
 */

function startQuiz(){
    document.getElementById("start-btn").style.display= 'none';
    document.getElementById("question").innerHTML = questions[0]['question'];

    document.getElementById("answer-choice-0").innerHTML = questions[0]['answers'][0]['text']
    document.getElementById("answer-choice-1").innerHTML = questions[0]['answers'][1]['text']
    document.getElementById("answer-choice-2").innerHTML = questions[0]['answers'][2]['text']
    document.getElementById("answer-choice-3").innerHTML = questions[0]['answers'][3]['text']
}

/** moveToNextQuestion Function
 * This function is to check whether there is available questions remaining 
 * If there are no questions remaining then the quiz will end with an alert
 * calling for the final score and a message
 * If there are questions remaining it will call on the next question
 */

function moveToNextQuestion(questionNo){
    if(typeof questions[questionNo] === 'undefined') {
        var finalResult = document.getElementById("finalScore").innerHTML;
        alert("Congratulations, you have completed the quiz, Your total score is " +finalResult + ". Click OK to restart and try again!");
        
        window.location.href = window.location.href;
        return true;

    } else {
        document.getElementById("question").innerHTML = questions[questionNo]['question'];

        document.getElementById("answer-choice-0").innerHTML = questions[questionNo]['answers'][0]['text'];
        document.getElementById("answer-choice-1").innerHTML = questions[questionNo]['answers'][1]['text'];
        document.getElementById("answer-choice-2").innerHTML = questions[questionNo]['answers'][2]['text'];
        document.getElementById("answer-choice-3").innerHTML = questions[questionNo]['answers'][3]['text'];
    }
}

/** checkAnswer Function
 * Uses the hidden html element to check the user selected answer
 * If correct, changes button color to green with a delay before 
 * changing back to white and calling nextQuestion function
 * Adds 5 points when correct
 * If incorrect, changes to red and with a delay before changing
 * back to white and moving to next question
 * Adds no points when incorrect
 */
function checkAnswer(selectedAnswer){
    var currentQuestionNo = document.getElementById("currentQuestion").value;
    var correctAnswer = questions[currentQuestionNo]['answers'][selectedAnswer]['correct'];

    if (correctAnswer == true) {
        document.getElementById("answer-choice-"+selectedAnswer).style.backgroundColor = "#00FF00";
        var getCurrentScore = document.getElementById("finalScore").innerHTML;

        setTimeout(function() {
        document.getElementById("finalScore").innerHTML = Number(getCurrentScore)+Number(5);
        var nextQuestion = Number(document.getElementById("currentQuestion").value)+Number(1);
        document.getElementById("currentQuestion").value = nextQuestion;
        document.getElementById("answer-choice-"+selectedAnswer).style.backgroundColor = "#000000"

        moveToNextQuestion(nextQuestion);
    }, 1000);

    } else {
        document.getElementById("answer-choice-"+selectedAnswer).style.backgroundColor = "#ff0000"
        setTimeout(function() {
        var nextQuestion = Number(document.getElementById("currentQuestion").value)+Number(1);
        document.getElementById("currentQuestion").value = nextQuestion;
        document.getElementById("answer-choice-"+selectedAnswer).style.backgroundColor = "#000000"
        moveToNextQuestion(nextQuestion);
    }, 1000);
    }
}

// Questions and Answers Array
var questions = [{
    question: "Which player has the most premier league appearances of all time?",
    answers: [{
        text: 'Gareth Barry',
        correct: true
    },
    {
        text: 'Gary Neville',
        correct: false
    },
    {
        text: 'Hugo Lloris',
        correct: false
    },
    {
        text: 'Robbie Keane',
        correct: false
    }
    ]
},
{
    question: "Which player has the most premier league red cards",
    answers: [{
        text: 'Roy Keane',
        correct: false
    },
    {
        text: 'Paul Scholes',
        correct: false
    },
    {
        text: 'Patrick Viera',
        correct: true
    },
    {
        text: 'Granit Xhaka',
        correct: false
    }
    ]
},
{
    question: "Who is the only player to have scored for SEVEN premier league clubs? ",
    answers: [{
        text: 'Robbie Keane',
        correct: false
    },
    {
        text: 'Adebayor',
        correct: false
    },
    {
        text: 'Chris Sutton',
        correct: false
    },
    {
        text: 'Craig Bellamy',
        correct: true
    }
    ]
},
{
    question: "Which one of these players has scored five goals in a single Premier League game?",
    answers: [{
        text: 'Alexis Sanchez',
        correct: false
    },
    {
        text: 'Dimitar Berbatov',
        correct: true
    },
    {
        text: 'Romelu Lukaku',
        correct: false
    },
    {
        text: 'Cristiano Ronaldo',
        correct: false
    }
    ]
},
{
    question: "Which of these players have played for Liverpool, Arsenal and Chelsea?",
    answers: [{
        text: 'Nicolas Anelka',
        correct: true
    },
    {
        text: 'Alan Shearer',
        correct: false
    },
    {
        text: 'Fernando Torres',
        correct: false
    },
    {
        text: 'Emanuel Adebayor',
        correct: false
    }
    ],
}];