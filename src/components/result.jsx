import React from 'react'

export const Result = ({ setIsDone, setQuizDetailBox, setScore, score, quizLength , setCurrentQuestion ,setQuizModal}) => {
    const correctAns = score
    const wrongAns = quizLength - score
    const percentage = (score / quizLength) * 100;
  return (
    <div className='container-pg'>
    <h1 style={{ textAlign: "center", fontSize: "50px" }}>Your result</h1>
    <div style={{ width: "100%", textAlign: "center" }}>
        <h2 style={{ margin: "13px 0px" }}>Correct Answers: {correctAns}</h2>
        <h2 style={{ margin: "13px 0px" }}>Wrong Answers: {wrongAns}</h2>
        <h2 style={{ margin: "13px 0px" }}>Status: {percentage >= 70 ? "Passed" : "Failed"}</h2>
        <h1 style={{ margin: "13px 0px" }}>Percentage: {percentage}%</h1>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        
        <button className='option-btn' onClick={() => {
            setIsDone(false)
            setQuizDetailBox(false)
            setScore(0)
            setCurrentQuestion(1)
        }}>Done</button>
    </div>
</div>
  )
}
