
function startQuiz(){
    document.getElementById("start-btn").style.display= 'none';
    document.getElementById("question").innerHTML = questions[0]['question'];

    document.getElementById("answer-choice-0").innerHTML = questions[0]['answers'][0]['text']
    document.getElementById("answer-choice-1").innerHTML = questions[0]['answers'][1]['text']
    document.getElementById("answer-choice-2").innerHTML = questions[0]['answers'][2]['text']
    document.getElementById("answer-choice-3").innerHTML = questions[0]['answers'][3]['text']
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