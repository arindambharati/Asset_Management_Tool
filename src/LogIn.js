import './App.css';
import picture from './pic3.jpg';
import { useState,useEffect } from 'react';

var fontColor='gray';

function LogIn() {
  
  const initialValues={username: "",password: ""};
  const [userSignUp, setUserSignUp] = useState({initialValues});
  const [userErrors, setUserErrors] = useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleInput = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    
    setUserSignUp({...userSignUp, [name]:value});
    console.log(userSignUp);
    
  }

  const [records,setRecords]=useState([]);

  const handleSubmit =(event)=>{

    event.preventDefault();

    setUserErrors(validate(userSignUp));
    setIsSubmit(true);
  }

  useEffect(()=> {
    console.log(userErrors);
      if(Object.keys(userErrors.length ===0 && isSubmit)){
        console.log(userSignUp);
      }
    },[userErrors] )
   

  const validate=(values)=> {
    const errors={}

    if(!values.username){
      errors.username="Username is required!";
    }

    if(!values.password){
      errors.password="Password is required!";
    }
    return errors;
  }

  return (
    <div className="App">
     <img src={picture} className="image" alt="this is a picture"/>
     <div>
       <h1>Log In</h1>
       <h3 style={{color: fontColor}}>Let's create your account</h3>

       <div className="input_Div">
            <input className="inp_Style" type="username" name="username"
             autoComplete="off"
             value={userSignUp.username}
             onChange={handleInput}
             placeholder="Username"></input>

            <p>{userErrors.username}</p>


            <div className="pwd_Div">
                <input className="pwd_Style" type="password" name="password"
                autoComplete="off"
                value={userSignUp.password}
                onChange={handleInput}
                placeholder="Password"></input>
            </div>
            <p>{userErrors.password}</p>
            <div className="submit_Btn">
              <button className="button" type="submit" onClick={handleSubmit}>Log In</button>
            </div>
       </div> 
       <pre>{JSON.stringify(userSignUp,undefined,3)}</pre> 
     </div>
    </div>
  );
}

export default LogIn;