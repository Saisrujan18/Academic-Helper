import {useState} from 'react';
import './SignIn.css';
import Login from './Login';
import Register from './Register';


function SignIn()
{
  const [isRegisterPage, setIsRegisterPage] = useState (false);

  return (
    
	<div style={{display: 'flex',justifyContent: 'center',}}>
      
	  {isRegisterPage === false
        ?<div className="m-5 pa-3">
            <Login />
            <button
              className="btn btn-primary m-5"
              onClick={() => setIsRegisterPage (true)}
            >
			Go To Register
            </button>
          </div>
        : <div className="m-5 pa-3">
            <Register setIsRegisterPage={setIsRegisterPage} />
            <button
              className="btn btn-primary m-5"
              onClick={() => setIsRegisterPage (false)}
            >
            Go To Login!!!
            </button>
          </div>}

    </div>
  );
}

export default SignIn;