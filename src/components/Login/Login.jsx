import React, { useContext, useState } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../Share/NavBar';
import SocialMedia from '../SocialMedia/SocialMedia';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
	
	// error 
	const [error, setError] = useState("");
	const { logIn } = useContext(AuthContext);

	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';
	const navigat = useNavigate();

	const handelSingIm = e => {
		e.preventDefault();
		console.log('click');
		
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		setError('');
		logIn(email, password)
			.then(res => navigat(`${from}`),
				form.reset())
			.catch(err => setError(err.message));
		
		
	}

	
	return (
		<div className='pb-5'>
			{/* navbar  */}
			<NavBar />

			<div className='max-w-[500px] mx-auto'>
				{/* login form  */}
				<form
					onSubmit={handelSingIm}
					className='border border-gray-900 p-8  my-10  rounded-md'
				>
					<h2 className='text-2xl font-bold'>Login</h2>

					{/* input field  */}
					<div>
						{/* email  */}
						<div className='border-b border-black my-8'>
							<input
								type='text'
								name='email'
								id=''
								className='bg-transparent outline-none'
								placeholder='Username or Email'
								required
							/>
						</div>
						{/* password  */}
						<div className='border-b border-black my-8'>
							<input
								type='password'
								name='password'
								id=''
								className='bg-transparent outline-none'
								placeholder='Passowrd'
								required
							/>
						</div>
						{/* remember me */}
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-1'>
								<input
									type='checkbox'
									className='checkbox checkbox-primary'
								/>
								<label htmlFor=''>Remember Me</label>
							</div>
							<div>
								<p className='text-[#F9A51A] cursor-pointer'>
									Forgot Password
								</p>
							</div>
						</div>

						{/* login btn  */}
						<button
							type='submit'
							className='mt-10 py-2 text-center cursor-pointer bg-[#f9a51a] w-full'
						>
							<p>Login</p>
						</button>
						{/* error  */}
						<p>
							<small className='text-red-500'>{error}</small>
						</p>
						<p className='text-center mt-2'>
							Don’t have an account?{" "}
							<Link
								to={"/register"}
								className='text-[#F9A51A]'
							>
								Create an account
							</Link>
						</p>
					</div>
				</form>

				<SocialMedia />
			</div>
		</div>
	);
};

export default Login;