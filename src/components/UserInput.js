import React, { useState } from "react";

function UserInput(props){

  const [userInput, setUserInput] = useState("");
  const [acceptingInput, toggleAcceptingInput] = useState(true);

  const inputElement = 
    <input 
      type="text" 
      name={props.labelName} 
      value={userInput} 
      onChange={(e) => setUserInput(e.target.value)}
    />

  const handleSave = () => {
    if(userInput){
      toggleAcceptingInput(!acceptingInput);
    }else{
      alert( props.labelName + " is required.");
    }    
  }


  return (
    <div>
      <label>
        {props.labelName}
        {acceptingInput ? inputElement : <span>{" " + userInput + " " }</span>} 
      </label>
      <button onClick={handleSave}>
        {acceptingInput ? "Save" : "Edit"}
      </button>
      
    </div> 
  );
}

export default UserInput;