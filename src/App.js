import React, {useState} from 'react';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App">
      <UserInput labelName="Name" />
      <UserInput labelName="Email"/>
      <UserInput labelName="Address"/>
      <UserInput labelName="About yourself" textarea={true}/>
      {/* <GeneralInformation />
      <Education />
      <PracticalExperience />       */}
    </div>
  );
}

export default App;
