import React, {useState} from 'react';
import GeneralInformation from './components/GeneralInformation';
import Education from './components/Education';
import PracticalExperience from './components/PracticalExperience';
import './index.css';


function App() {

  return (
    <div className="app">      
      <GeneralInformation />
      <Education />
      <PracticalExperience />            
    </div>
  );
}

export default App;
