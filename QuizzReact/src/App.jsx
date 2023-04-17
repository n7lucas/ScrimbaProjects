import { useState, useEffect } from 'react'
import Questions from './components/Questions'
import Select from './components/Select'
import {categoryData} from '../data/categoryData.js'
import shuffle from './utils/randomArr'
function App() {

  const [start, setStart] = useState(true)
  const [apiData, setApiData] = useState(null)
  const [data, setData] = useState({  begin: true});
  const [questionObj, setQuestionObj] = useState(null)
  const [endGame, setEndGame] = useState(false)
  const [score, setScore] = useState(0)
  //const [isPlaying, setIsPlaying] = useState(true);
  
/*-----------------------------------------------------GET DATA FROM API AND TRANFORM-----------------------------*/

  //Get the data from Select Srenn in the Select component
  const childToParent = (dataDoSelect) => {
    setData(dataDoSelect);
  }

  //Get Data from Api using the data coming from childToParent()
  useEffect( () => {
    async function getQuestions () {
      try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${data.numquestions}&category=${data.category}&difficulty=${data.difficulty}&type=${data.questiontype}`)             
      const dados = await response.json()
      if (dados.response_code === 1){
         alert("Could not return results. The API doesn't have enough questions for you ☹️, try again with less questions 🙂")
        NewGame ()
      }
      setApiData(dados.results.map((question) => 
      ({...question, incorrect_answers: question.incorrect_answers.map((answer) => ({answer, isSelected: false, isCorrect: false
      })), correct_answer: {answer: question.correct_answer, isSelected: false, isCorrect: true}})))
    }catch (error) {
      console.error("Error while fetch data", error)
    }
    }
    getQuestions()
      
  },[data])


  
/*Transforming the data to a format to able us to work 
1 - Transform the correct ans incorrect array in a single one, and each one become a object that contain isSelected and isCorrect as boolean
*/
useEffect(() => {
  if (apiData) {
    // Extract the necessary information from apiData
    const dataIncorrect = apiData.map(item => item.incorrect_answers) //ARRAY DE ARRAYS
    const dataCorrect = apiData.map(item => item.correct_answer) //ARRAY DE OBJETPS
    const questions = apiData.map(item => item.question)
    //Percorro cada array de dados incorretos e insiro o dado correto junto
    const answer_all = dataIncorrect.map((nestedArray, index) => shuffle([...nestedArray, dataCorrect[index]]));
    // Transformo cada um objeto e coloco mais a propriedade question junto
    //Agora possuo um array de answers e um array de questoes
    const newData = answer_all.map((item, index) => ({answers: [...item], question: questions[index], id: index}))


    setQuestionObj(newData)
  } 

}, [apiData]);


function handleUserChoice (answerText, currentData) {
  setQuestionObj(prev => {
    //Get the arr of answers that match the same id from currentData
    const idxSelected = prev.findIndex(item => item.id === currentData.id) 
     //In the object with the array that has the corresponding question I clicked on, I check that an item has already been selected
     //If it was already selected (=!-1) I take the id of this item and set it to false and set what was clicked to receive true this way only 1 item per array can be selected
     //If it wasn't selected yet I just find the array I clicked on and leave it as false
    const isAlreadySelected = prev[idxSelected].answers.findIndex(answer => answer.isSelected) 
    if (isAlreadySelected !== -1){
       prev[idxSelected].answers[isAlreadySelected].isSelected = false
       const arrayy =  prev[idxSelected].answers.findIndex(item => item.answer === answerText)
       prev[idxSelected].answers[arrayy].isSelected = true
    }else {
        const arrayy =  prev[idxSelected].answers.findIndex(item => item.answer === answerText)
        prev[idxSelected].answers[arrayy].isSelected = true
    }
    return [...prev]
  })
  

}

function EndGame() {
  let contador = 0
  questionObj.forEach(item => {
    item.answers.some(answer => {
      if(answer.isSelected && answer.isCorrect){
        contador ++;
      }
    })
    })
   // const equal = item.answers.some(item => (item.isCorrect === false && item.isCorrect === false))
   setScore(contador)
   setEndGame(true)
  }

// First Screen 
  function renderStart () {
    return ( <div className='start--container '>
                <div className='start--inner'>
                  <h1>Quizzcal</h1>
                  <h4>Test your knowledge ✍️ 👨‍🔬 👾</h4>
                  <button onClick={() => setStart(!start)}>Start Quiz</button>
                </div>
            </div>)
  }

  function NewGame (){
    setData({begin: true})
    setStart(true)
    setEndGame(false)
    setIsPlaying(!isPlaying);
    console.log(isPlaying, "DEPOIS")
  }

  
//---------------------------------------------------------------------------------------

/* Implement in the future
    const audio = new Audio('../data/ffxmusic.mp3');
  
    function togglePlay() {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  
*/
//-----------------------------------------------------------------------------------------


//Send the data for Question to get all the data that comes from API with html
let renderQuestions = (questionObj != null) ? questionObj.map(item => 
    (<Questions Question={item.question} allAnswers={item.answers} currentItem={item} gameEnd={endGame} 
      userChoice={handleUserChoice}/>)) : "Loading"

//Get the catefories coming from caegoryData wich are a file with all the categories store in a object
const selectData = categoryData.trivia_categories.map(item => 
    ( <option value={item.id}>{item.name}</option>))


const Finalscore = endGame ? (<div><h2> You Scored {score}/{questionObj.length} Correct Answers</h2>  <button className='btn--end--new' onClick={NewGame}>New Game</button></div>) : ( <button onClick={EndGame}>Check answers</button>)

  return (
    <div className="App">
        {start && data.begin ? // If starte data.begin is true I haven't started the game yet, so it's on the first screen
         renderStart() : // RENDERS THE FIRST (INITIAL) SCREEN
        !start && !data.begin ?  // If both are false (I'VE STARTED AND SELECTED THE LEVELS) I render the questions
        <div> {renderQuestions} {Finalscore} </div> : //Render das perguntas
        <div className='question--container'> <Select  renderOptions={selectData}  //If both previous conditions are false, I go to the selection screen
        getDatafromMenu={childToParent} />  </div>}
        
    </div>
  )
}

export default App
