import React from "react";
import { useState, useEffect } from 'react'
import randomArr from '../utils/randomArr.js'
import shuffle from "../utils/randomArr.js";
export default function Questions (props) {

 


   const questionRendender = props.allAnswers.map(item => 
    { return (<div onClick={ () => 
     props.userChoice(item.answer, props.currentItem)} 
     className="answer--box" 
     style={ !props.gameEnd ? ({backgroundColor: item.isSelected ? "#D6DBF5" : ""}) :
    {backgroundColor: (item.isSelected && item.isCorrect ) ? "#94D7A2" :  item.isSelected ? "#F8BCBC" : item.isCorrect ? "#94D7A2" : ""} }
     >{item.answer}</div> ) })

    
   return (<div className="outer-question--container" >
                <h2>{props.Question}</h2>
                <div className="inner-question--container">
                {questionRendender}
                </div>
                <div className="bottom--line"></div>
            </div>)
}