import './App.css';
import picture from './pic3.jpg';
import { useState,useEffect } from 'react';

var fontColor='gray';

function App() {
  
  const initialValues={username: "",email: "",password: "",confirm_password: ""};
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
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.username){
      errors.username="Username is required!";
    }
    if(!values.email){
      errors.email="Email is required!";
    }else if(!regex.test(values.email)){
      errors.email="This is not a valid email!";
    }
    if(!values.password){
      errors.password="Password is required!";
    }
    if(!values.confirm_password){
      errors.confirm_password="Confirm password is required!";
    }else if(values.password !== values.confirm_password)
    {
      errors.confirm_password="Confirm password does not match!"
    }
    return errors;
  }

  return (
    <div className="App">
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

            <p>{userErrors.username}</p>

            <input className="inp_Style" type="email" name="email"
            autoComplete="off"
            value={userSignUp.email}
            onChange={handleInput}
            placeholder="Email"></input>

            <p>{userErrors.email}</p>

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
            <div className="error_pwd_display">
                <p>{userErrors.password}</p>
                <p className="confirm_pwd">{userErrors.confirm_password}</p>
            </div>
            <div className="submit_Btn">
              <button className="button" type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
       </div> 
       <pre>{JSON.stringify(userSignUp,undefined,3)}</pre> 
     </div>
    </div>
  );
}

export default App;
