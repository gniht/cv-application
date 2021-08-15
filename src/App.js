import React, {useState} from 'react';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App">
      <UserInput labelName="Address"/>
      {/* <GeneralInformation />
      <Education />
      <PracticalExperience />       */}
    </div>
  );
}

export default App;
