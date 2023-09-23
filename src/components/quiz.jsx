
import React, { useState } from "react";
import { htmlQuizData } from "./data/quizdata";
import { cssQuizData } from "./data/quizdata";
import { jsQuizData } from "./data/quizdata";
import '../App.css';
import { Result } from "./result";
export const QuizApp = () => {
  const [quizModal , setQuizModal] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState("");
  const [quiz, setQuiz] = useState();
  const [quizDetailBox, setQuizDetailBox] = useState(false);
  const [isDone, setIsDone] = useState(false);
 
  const changeQuestion = (quiz) => {
    updateScore(quiz);
    if (currentQuestion < quiz.length - 1 && clickedOption !== ""
      ) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption("")
      
    }if(clickedOption == "" ){
      return(alert(`plz select one option`))

    } else if(currentQuestion === quiz.length - 1){
      setQuizModal(false)
      setIsDone(true)
    }
  };
  function backgroundColorHandler(quiz) {
    if (quiz[0].name === "HTML") {
        return `#F26457`
    } else if (quiz[0].name === "CSS") {
        return `#FFE4E1`
    } else {
        return `#ece032`
    }
}
  const updateScore = (quiz) => {
   
  if (clickedOption == quiz[currentQuestion].answer) {
      setScore((s) => s + 1)
      setClickedOption("")
      console.log(clickedOption)
      
  } else {
      setScore((s) => s)
      setClickedOption("")
     
  }
  };
  function quizSelectionHandler(quizData) {
    setQuiz(quizData)
    console.log(quizData)
  console.log(quiz);
}


return  (
  quizModal === true  ?  <div>
       <h1 style={{display:"flex",justifyContent:"center", paddingBottom:"10px"}}>{quiz[0].name} QUIZ</h1>
       {console.log(score)}
       
      <div className="container">

        <div className="question">
          <span id="question-number">{currentQuestion}</span>
          <span id="question-text">
            {quiz[currentQuestion].question}
          </span>
        </div>
        <div className="option-container">
          {quiz[currentQuestion].options.map((option, i) => {
            return (
                <button
              className={`option-btn ${
                clickedOption == option ? "checked" : null
            }`}
                
                key={i}
              
                onClick={()  => {
                  updateScore(quiz)
                  setClickedOption(option)
                } }
              >
                
                
                {option}
              </button>
            );
          })}
        </div>
   
         <input
          type="button"
          value={"NEXT"}
          id="next-button"
          // onClick={changeQuestion(quiz)}
          onClick={() => changeQuestion(quiz)
          } 
        /> 
        
      </div>
    </div> : !quizModal && !quizDetailBox ? <Welcomepage setQuizDetailBox={setQuizDetailBox} quiz={quiz} setQuizModal={setQuizModal} backgroundColorHandler={backgroundColorHandler} setIsDone={setIsDone}  quizSelectionHandler={quizSelectionHandler} htmlQuizData={htmlQuizData} cssQuizData={cssQuizData} jsQuizData={jsQuizData} /> : quizDetailBox === true && isDone === false? <QuizDetail setQuizDetailBox={setQuizDetailBox} quiz={quiz} setQuizModal={setQuizModal} backgroundColorHandler={backgroundColorHandler} setIsDone={setIsDone} /> : isDone == true && !quizModal  ? <Result setIsDone={setIsDone} setQuizDetailBox={setQuizDetailBox} setScore={setScore} score={score} quizLength={quiz.length-1} setCurrentQuestion={setCurrentQuestion} setQuizModal={setQuizModal}  /> : ""
    
  ); 
};



export const Welcomepage= ({ quizSelectionHandler, htmlQuizData, cssQuizData, jsQuizData , setQuizDetailBox}) => {
  return (
    <div className="container-pg">
      <h2 style={{paddingBottom:"25px" , paddingTop:"20px"}}>Welcome To The Quiz App</h2>
      <div >
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
        <button className="option-btn-pg" onClick={() => {
                quizSelectionHandler(htmlQuizData)
                setQuizDetailBox(true)
            }}
        
        >
          HTML
        </button>
        <button className="option-btn-pg" onClick={() => {
                quizSelectionHandler(cssQuizData)
                setQuizDetailBox(true)
               
            }}>
            CSS
        </button>
        <button className="option-btn-pg"  onClick={() => {
                quizSelectionHandler(jsQuizData)
                setQuizDetailBox(true)
               
            }}>
          JAVASCRIPT
        </button>
        </div>
      </div>
      <h4 style={{ paddingTop:"20px", paddingBottom:"10px"}}>MADE BY SALIK SHEIKH</h4>
      <div>
   
      </div>
    </div> 
 
  );
};


function QuizDetail({ setQuizDetailBox, quiz, setQuizModal , backgroundColorHandler, setIsDone }) {
  
  return (
      <div className='container-pg' style={{ backgroundColor: backgroundColorHandler(quiz) }}>
          <h1 style={{ margin: "50px 0px", fontSize: "1.5rem" }}>Welcome to {quiz[0].name} quiz</h1>
          <h2>Number of Questions: {quiz.length - 1}</h2>
          <h2>Passing percentage: 70%</h2>
          <div style={{ width: "80%", display: "flex", justifyContent: "space-around", margin: "30px 0px", padding: "10px" }}>
              <button className='option-btn' onClick={() => {
                  setQuizModal(true)
                  setIsDone(false)
                  
              }}>Start Quiz</button>
              <button className='option-btn' onClick={() => {
                  setQuizDetailBox(false)
              }}>Back</button>
          </div>
      </div>
  )
}