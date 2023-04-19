import {React,useState} from "react";
//import {categoryData} from '../../data/categoryData.js'


export default function Select (props) {

 const [formData, SetFormData] = useState({
    numquestions : "5",
    category: "",
    difficulty: "",
    questiontype: "",
    begin: true
})


    function handleChange (e) {
        const {name, value, type} = e.target
        SetFormData({...formData, [name]: value})
    }

    //This function will sand the Select information data to the App to use to call the Api
    function handleSubmit(event) {
        event.preventDefault()
        props.getDatafromMenu({...formData, begin: false})
    }


         
    return (        <div>
                     <h1> Welcome to Trivia API</h1>
                     <p>Select the options to generate questions!</p>
                      <form className="form--container" onSubmit={handleSubmit}>
                      <label htmlFor="numberinput">Number of Questions</label>
                         <input 
                            className="input--container"
                             type="number" 
                             placeholder="Min 10, Max 50 (Default is 5)" 
                             name="numquestions" 
                             id="numberinput"
                            onChange={handleChange}/>
                             <label htmlFor="category">Select Category</label>
                            <select  className="select--container"
                                id="category" 
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">-- Choose --</option>
                                {props.renderOptions}
                                </select>
                                <label htmlFor="difficulty">Select Difficulty</label>
                            <select  className="select--container"
                                    id="difficulty"
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleChange}
                            >
                                <option value="">-Choose Difficulty--</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                            <label htmlFor="questiontype">Select Type</label>
                            <select  className="select--container"
                                id="questiontype"
                                name="questiontype"
                                value={formData.questiontype}
                                onChange={handleChange}
                            >
                                <option value="multiple">Multiple Choice</option>    
                                <option value="boolean">True/False</option>

                            </select>
                            <button>Start</button>
                        </form>
                        </div>
              
                 )
}