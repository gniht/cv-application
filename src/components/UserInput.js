import React, { useState } from "react";
import '../index.css';

function UserInput(props){

  const [userInput, setUserInput] = useState("");
  const [acceptingInput, toggleAcceptingInput] = useState(true);

  let inputElement;
  // assign inputElement based on whether the input is a textarea
    if (props.textarea){
      inputElement = 
      <p>
        <textarea
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)}
        />
      </p>
    }else{
      inputElement = <input 
        type="text" 
        name={props.labelName} 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)}
    /> 
    }

  const handleSave = () => {
    if(userInput){
      toggleAcceptingInput(!acceptingInput);
    }else{
      alert( props.labelName + " is required.");
    }    
  }

  const handleClear = () => {
    setUserInput("");
  }

  const outputElement = (
    props.textarea ? <p>{userInput}</p> : <span>{" " + userInput + " " }</span>
  );

  return (
    <div>
      <label>
        {props.labelName}
        {acceptingInput ? inputElement : outputElement} 
      </label>
      <button onClick={handleSave}>
        {acceptingInput ? "Save" : "Edit"}
      </button>
      <button onClick={handleClear}>
        Clear
      </button>      
    </div> 
  );
}

export default UserInput;