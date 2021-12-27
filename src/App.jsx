import React, { useState }  from 'react';
import './App.css';
import question1 from './QuestionImages/question1.jpg';
import question2 from './QuestionImages/question2.png';
import question3 from './QuestionImages/question3.png';
import question4 from './QuestionImages/question4.jpg';
import question5 from './QuestionImages/question5.png';
import question6 from './QuestionImages/question6.png';
import question7 from './QuestionImages/question7.jpg';
import question8 from './QuestionImages/question8.png';
import question9 from './QuestionImages/question9.png';
import question10 from './QuestionImages/question10.png';

function App() {

  const imagesPool = [
    question1, 
    question2, 
    question3, 
    question4, 
    question5, 
    question6,
    question7,
    question8,
    question9,
    question10,
 
];

 
  const questions= [
    {
      answers: [ //question1
        {answer: 'Graph isn’t drawn correctly', isCorrect: true},
        {answer: 'Data points plotted incorrectly', isCorrect: false},
        {answer: 'There is nothing wrong with the graph', isCorrect: false},
        {answer: '8.6% isn’t plotted correctly', isCorrect: false},
      ],
    },
    {
      answers: [ //question2
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'Wording is misleading', isCorrect: true},
        {answer: 'No information is conveyed by the graph', isCorrect: false},
        {answer: 'Nothing is wrong with the graph', isCorrect: false},,
      ],
    },
    {
      answers: [ //question3
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'X or Y axis is scaled up or down', isCorrect: true},
        {answer: 'No information is conveyed by the chart', isCorrect: false},
        {answer: 'Nothing is wrong with the graph', isCorrect: false},,
      ],
    },
    {
      answers: [ //question4
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'X or Y axis is manipulated', isCorrect: true},
        {answer: 'No information is conveyed by the chart', isCorrect: false},
        {answer: 'Nothing is wrong with the graph', isCorrect: false},,
      ],
    },
    {
      answers: [ //quesiton5
        {answer: 'No information is conveyed by the graph', isCorrect: false},
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'Graph is not proportional', isCorrect: true},
        {answer: 'answeNothing is wrong with the graph', isCorrect: false},,
      ],
    },{
      answers: [ //question6
        {answer: 'No information is conveyed by the graph', isCorrect: false},
        {answer: 'Graph is not proportional', isCorrect: true},
        {answer: 'Data is cherry picked', isCorrect: false},
        {answer: 'Nothing is wrong with the graph', isCorrect: false},,
      ],
    },
    {
      answers: [ //question7
        {answer: 'No information is conveyed by the graph', isCorrect: true},
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'X or Y axis is scaled up or down', isCorrect: false},
        {answer: 'Nothing is wrong with the graph ', isCorrect: false},,
      ],
    },{
      answers: [ //question8
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'Wording is misleading', isCorrect: false},
        {answer: 'Data is cherry picked', isCorrect: true},
        {answer: 'Nothing is wrong with the graph', isCorrect: false},,
      ],
    },
    {
      answers: [ //question9
        {answer: 'Context is left out', isCorrect: false},
        {answer: 'X or Y axis is scaled up or down', isCorrect: false},
        {answer: 'No information is conveyed by the chart', isCorrect: false},
        {answer: 'Nothing is wrong with the graph', isCorrect: true},,
      ],
    },
    {
      answers: [ //question10
        {answer: 'X or Y axis labeling is missing', isCorrect: false},
        {answer: 'Data is cherry picked', isCorrect: false},
        {answer: 'No information is conveyed by the chart', isCorrect: false},
        {answer: 'Nothing is wrong with the graph', isCorrect: true},,
      ],

    },
    {
      answers: [ //to remove the answers from the screen
        {answer: 'Thank you for Playing!', isCorrect: false},
    
      ],

    },
    
  ];


const [currentQuestion, setCurrentQuestion] = useState(0);

const handleClick = () => {
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else{
    setShowScore(true);
  }
};


const [totalPoints, setTotalPoints] = useState(0);

const addPoint = (isCorrect) => {
  if (isCorrect === true){
    const newTotal = totalPoints + 1;
    setTotalPoints(newTotal);
  }

};

//{questions[currentQuestion].question}

  return (
    <div>
      <header>Question {currentQuestion + 1}: What is misleading about the graph below?</header>
      <section class ='question-block'>
        <div ><img  class = 'question-image'src={imagesPool[currentQuestion]}/></div>
        <div >
        {questions[currentQuestion].answers.map((answerToPick) => <button
        onClick={() => {handleClick(); addPoint(answerToPick.isCorrect);
        }} class='question-answers'>{answerToPick.answer}</button>)}
        </div>
      </section>
      <footer>YOUR CURRENT SCORE IS {totalPoints}</footer>
    </div>
  );
}

export default App;
