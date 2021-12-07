import picture from './pic3.jpg';
import { useState } from 'react';
import './App.css';

var fontColor='gray';

function SignUp() {

  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const handleInput = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    console.log(name,value);

    setUserSignUp({...userSignUp, [name]:value});
  }

  const [records,setRecords]=useState([]);

  const handleSubmit =(event)=>{

    // event.preventDefault;
    const newRecord={...userSignUp}
    //store the data
    console.log(records);
    setRecords([...records, newRecord]);
     //console.log(records);

    setUserSignUp({username:"",email:"",password:"",confirm_password:""});
  }


  return (
    <div className="SignUp">
     <img src={picture} className="image" alt="this is a picture"/>
     <div>
       <h1>Sign Up</h1>
       <h3 style={{color: fontColor}}>Let's create your account</h3>

       <div className="input_Div">
            <input className="inp_Style" type="username" name="username"
             autoComplete="off"
             value={userSignUp.username}
             onChange={handleInput}
             placeholder="Username"></input>

            <input className="inp_Style" type="email" name="email"
            autoComplete="off"
            value={userSignUp.email}
            onChange={handleInput}
            placeholder="Email"></input>

            <div className="pwd_Div">
                <input className="pwd_Style" type="password" name="password"
                autoComplete="off"
                value={userSignUp.password}
                onChange={handleInput}
                placeholder="Password"></input>

                <input className="pwd_Style" type="password" name="confirm_password"
                autoComplete="off"
                value={userSignUp.confirm_password}
                onChange={handleInput}
                placeholder="Confirm Password" style={{marginLeft:'20px'}}>
                </input>
            </div>
            <div className="submit_Btn">
              <button className="button" type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
       </div>  
     </div>
    </div>
  );
}

export default SignUp;
