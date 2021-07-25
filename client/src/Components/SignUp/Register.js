import {useState} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import './SignIn.css';

function Register()
{
	const [email, setEmail] = useState ('');
	const [password, setPassword] = useState ('');
	const [done,changeD]=useState(false);

	function handleSignInSubmit(event)
	{
		event.preventDefault ();
		const User={email,password};
		// console.log(User);
		axios
			.post ('http://localhost:3001/register',User)
			.then (res =>
			{
				// console.log(res);
				if (res.data === 'done')
				{
					alert("Registration Done !");
					changeD(true);
				}
				else {alert(res.data);}
			})
			.catch(error => { console.log(error);
			});
	};
	if(done===true)return <Redirect to="/" />
  return (
	<div className="container">
		<h1 className="m-2 p-2 text-dark">Register</h1>
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
			<button type="submit" className="btn btn-primary" onClick={handleSignInSubmit}>Register</button>
		</form>
	</div>
  );
};

export default Register;