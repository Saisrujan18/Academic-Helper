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
	<div className="container jumbotron shadow-sm all">
		<h2 className="headr text-dark">Register</h2>
		<form>
			<br></br>
			<div className="form-group">
			{/* <label htmlFor="email">Email</label> */}
			<input
				className="form-control"
				name="email"
				autoComplete="off"
				placeholder="Enter your mail"
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

			<button type="submit" className="btn btn-light x" onClick={handleSignInSubmit}>Register</button>
		</form>
	</div>
  );
};

export default Register;