import UserInput from "./UserInput";
import '../index.css';

function GeneralInformation(){

  return (
    <div className="general-information">
      <hr />
      <h3>General Information</h3>
      <br />
      <UserInput labelName="Name" />
      <UserInput labelName="Email"/>
      <UserInput labelName="Address"/>
      <UserInput labelName="About yourself" textarea={true}/>
    </div>
  );
}

export default GeneralInformation;