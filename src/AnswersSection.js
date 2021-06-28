import './css/hints.css'
import data from './data'
import React, { useState } from "react";


const firstAnswer = '10 KG'
const secondAnswer = '1260 KG'
const thirdAnswer = '1 (17/28) KG'
const fourthAnswer = '62 (2/9) KG'


function AnswersSection(){

    const [showCorrect, setShowCorrect] = useState(false);
    const [showWrong, setShowWrong] = useState(false);

    function checkMyAnswer(answer){
        const isCorrect = data.balances.questions.fullquestion.answer[answer].correct
        if(isCorrect){
            setShowCorrect(true)
            setShowWrong(false)
        }else{
            setShowCorrect(false)
            setShowWrong(true)
        }
    
    }

    
    return (

        <div className="col-12">
        <h3 className="text-center">Answers</h3>
        <div className="correct-class" style={{backgroundColor:'green', color:'white', textAlign:'center', display: (showCorrect ? 'block' : 'none')}}><p>Correct!</p></div>
        <div className= "wrong-class" style={{backgroundColor:'red', color:'white', textAlign:'center', display: (showWrong ? 'block' : 'none')}}><p>Wrong!</p></div>
        <div className="p-3 mb-2 bg-light">
            <div className="row">
                <div className="col-sm d-grid gap-2"> 
                    {}
                    <button data-testid="button-one" type="button" onClick={() => {checkMyAnswer(0)}} className={"btn btn-secondary mb-2 p-2"} >{firstAnswer} </button>
                    <button data-testid="button-two" type="button" onClick={() => {checkMyAnswer(1)}} className={"btn btn-secondary mb-2 p-2"} >{secondAnswer} </button>
                </div>
                <div className="col-sm d-grid gap-2"> 
                    <button data-testid="button-three" type="button" onClick={() => {checkMyAnswer(2)}} className={"btn btn-secondary mb-2 p-2"} >{thirdAnswer} </button>
                    <button data-testid="button-four" type="button" onClick={() => {checkMyAnswer(3)}} className={"btn btn-secondary mb-2 p-2"} >{fourthAnswer} </button>
                </div>
            </div>
        </div>
    </div>

    );
}

export default AnswersSection;