import {useState} from 'react';
import './SignIn.css';
import axios from 'axios';
import ShowModal from '../Modal/modal';

const Register = ({setIsRegisterPage}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [popup, setPopup] = useState ({
    title: '',
    msg: '',
    visible: false,
  });

	function handleSignInSubmit(event)
	{
		event.preventDefault ();
		const User={email,password};
		console.log(User);
		axios
			.post ('http://localhost:3001/register',User)
			.then (res => 
			{
				console.log(res);
				if (res.data === 'done')setIsRegisterPage (false);
				else
				{
					setPopup ({
						        title: 'Something Wrong',
						        msg: res.data,
						        visible: true,
						      });
				}
			})
			.catch(error => { console.log(error);
			});
	};

  return (
	<div className="container">
		<h1 className="m-2 p-2 text-dark">Register</h1>
         <ShowModal popup={popup} setPopup={setPopup} />
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
			<button type="submit" className="btn btn-primary" onClick={e => handleSignInSubmit (e)}>Register</button>
		</form>
	</div>
  );
};

export default Register;