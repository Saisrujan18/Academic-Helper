/* eslint-disable no-unused-vars */
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import './SignIn.css';

function Login()
{
	const [email, setEmail] = useState ('');
	const [password, setPassword] = useState ('');
	const [auth, setAuth] = useState (false);

	function handleSignInSubmit(event)
	{
		event.preventDefault ();
		console.log("Login clicked");
		
		axios
			.post ('http://localhost:3001/login',{email, password})
			.then(res => 
				{
					console.log("contacted /login  in 3001");
					if(res.data.found === true) 
					{
						sessionStorage.setItem ('user', JSON.stringify(res.data.user));
						setAuth (true);
					}
					else {alert(res.data.msg);}
				}
			)
			.catch(err=>{console.log(err);})
	};



	if (auth || sessionStorage.getItem ('user')) return <Redirect to="/" />;
	return (
		<div className="container jumbotron shadow-sm all">
			<h2 className="head text-dark">Login</h2>
			<form>
				<div className="form-group">
				{/* <label htmlFor="email">Email</label> */}
				<br></br>
				<input 
					className="form-control" 
					name="email"
					autoComplete="off"
					placeholder="Enter your mail id"
					onChange={e => setEmail (e.target.value)}
					value={email}
					required
				/>
				</div>
				<div className="form-group">				
				{/* <label htmlFor="password">Password</label> */}
				<br></br>
				<input 
					className="form-control" 
					name="password"
					autoComplete="off"
					placeholder="Enter your password"
					onChange={e => setPassword (e.target.value)}
					value={password}
					required
				/>
				</div>
				<br></br>
				<button 
					className="btn btn-light x" 
					onClick={handleSignInSubmit}
					type="submit"
				>Login</button>
			</form> 
			
		</div>
		);
	};

	export default Login;
	