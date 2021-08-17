import UserInput from "./UserInput";
import '../index.css';

function Education(){
  
  return (
    <div className="education">
      <hr />
      <h3>Education</h3>
      <br />
      <UserInput labelName="High School"/>
      <UserInput labelName="Higher Education"/>      
      <UserInput labelName="Academic Achievements" textarea={true}/>
    </div>
  );
}

export default Education;