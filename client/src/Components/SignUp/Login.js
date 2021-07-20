/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import './SignIn.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import ShowModal from '../Modal/modal';

function Login()
{

	const [popup, setPopup] = useState ({
		title: '',
		msg: '',
		visible: false,
	});
	
	const [email, setEmail] = useState ('');
	const [password, setPassword] = useState ('');
	const [auth, setAuth] = useState (false);

	function handleSignInSubmit(event)
	{
		event.preventDefault ();

		axios.post ('http://localhost:3001/login ', {email, password})
			.then(res => 
				{
					if (res.data.found === true) 
					{
						console.log (res.data.user);
						sessionStorage.setItem ('user', JSON.stringify (res.data.user));
						setAuth (true);
					}
					else {setPopup ({title: 'Something Wrong',msg: res.data.msg,visible: true});}
				}
			)
			.catch(err=>{console.log(err);})
	};

	if (auth || sessionStorage.getItem ('user')) return <Redirect to="/" />;
	return (
		<div className="container">
			<h1 className="m-2 p-2 text-dark">Login</h1>
			<form>
				<div className="form-group">
				<label htmlFor="email">Email</label>
				<input 
					className="form-control" 
					name="email"
					autoComplete="off"
					placeholder="mail"
					onChange={e => setEmail (e.target.value)}
					value={email}
					required
				/>
				</div>
				<div className="form-group">				
				<label htmlFor="password">Password</label>
				<input 
					className="form-control" 
					name="password"
					autoComplete="off"
					placeholder="password"
					onChange={e => setPassword (e.target.value)}
					value={password}
					required
				/>
				</div>
				<button 
					className="btn btn-primary" 
					onClick={e => handleSignInSubmit (e)}
					type="submit"
				>Login</button>
			</form>
		</div>
		
	);
};

export default Login;
