import UserInput from "./UserInput";
import '../index.css';

function PracticalExperience(){

  return (
    <div className="practical-experience">
      <hr />
      <h3>Work / Life Experience</h3>
      <br />
      <div className="card">
        <UserInput labelName="Most Recent Position Held"/>
        <UserInput labelName="Hourly Wage / Salary"/>
        <UserInput labelName="Describe your experience" textarea={true} />
      </div>
      <div className="card">
        <UserInput labelName="Previous Experience"/>
        <UserInput labelName="Hourly Wage / Salary"/>
        <UserInput labelName="Describe your experience" textarea={true} />
      </div>
      
    </div>
  );
}

export default PracticalExperience;