/* eslint-disable no-unused-vars */
import react,{useState} from 'react';

import Login from './Login';
import Register from './Register';

import './SignIn.css';

function SignIn()
{
	const [Reg,ChangeR]=useState (false);

	return (
		
		<div style={{display: 'flex',justifyContent: 'center',}}>
		
		{Reg===false?
		
		<div className="m-5 pa-3">
			<Login />
			<button className="btn btn-outline-secondary m-5" onClick={() => ChangeR(true)}>Go To Register</button>
		</div>
		: 
		<div className="m-5 pa-3">
			<Register/>
			<button className="btn btn-outline-secondary m-5" onClick={() => ChangeR (false)}>Go To Login</button>
		</div>
		}

		</div>
	);
}

export default SignIn;