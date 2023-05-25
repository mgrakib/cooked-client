import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Share/NavBar";
import { AuthContext } from '../../Provider/AuthProvider';
import SocialMedia from '../SocialMedia/SocialMedia';
const Register = () => {
    const navigation = useNavigate();
    const { createUser, updataUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    
    const location = useLocation();
    const from = location.state || '/';
    
    // submit btn
    const handelSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const secondName = form.secondName.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const conformPassword = form.conformPassword.value;
        // user Full Name
         const fullName = `${firstName} ${secondName}`;
        
        // clear error 
        setError('');

        if (password.length < 6) {
            setError('Password must be more than 6');
            return;
        }
        else if(password !== conformPassword) {
            setError("Password doesn't match");
			return;
        }
       
        createUser(email, password)
            .then(res => {
                updataUser(fullName, photoURL)
					.then(res => navigation(`${from}`), form.reset())
					.catch(error => setError(error.message));
            })
			.catch(error => setError(error.message));

      
        
    }
    return (
		<div className='pb-5'>
			{/* navbar  */}
			<NavBar />

			<div className='max-w-[500px] mx-auto'>
				{/* login form  */}
				<form
					onSubmit={handelSingUp}
					className='border border-gray-900 p-8  my-10  rounded-md'
				>
					<h2 className='text-2xl font-bold'>Create an account</h2>

					{/* input field  */}
					<div>
						{/* First Name  */}
						<div className='border-b border-black my-8'>
							<input
								type='text'
								name='firstName'
								id=''
								required
								className='bg-transparent outline-none w-full'
								placeholder='First Name'
							/>
						</div>
						{/* Last Name  */}
						<div className='border-b border-black my-8'>
							<input
								type='text'
								name='secondName'
								id=''
								required
								className='bg-transparent outline-none w-full'
								placeholder='Last Name'
							/>
						</div>
						{/* Username or Email  */}
						<div className='border-b border-black my-8'>
							<input
								type='email'
								name='email'
								id=''
								required
								className='bg-transparent outline-none w-full'
								placeholder='Username or Email'
							/>
						</div>
						{/* Photo URL  */}
						<div className='border-b border-black my-8'>
							<input
								type='text'
								name='photoURL'
								id=''
								required
								className='bg-transparent outline-none w-full'
								placeholder='Photo URL'
							/>
						</div>
						{/* password  */}
						<div className='border-b border-black my-8'>
							<input
								type='password'
								name='password'
								id=''
								required
								className='bg-transparent outline-none w-full'
								placeholder='Passowrd'
							/>
						</div>
						{/* Confrim Passowrd  */}
						<div className='border-b border-black my-8'>
							<input
								type='password'
								name='conformPassword'
								id=''
								required
								className='bg-transparent outline-none w-full'
								placeholder='Confrim Passowrd'
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

						{/* register btn  */}
						<button
							type='submit'
							className='mt-10 py-2 text-center cursor-pointer bg-[#f9a51a] w-full'
						>
							<p>Create an account</p>
						</button>
						{/* error  */}
						<p>
							<small className='text-red-500'>{error}</small>
						</p>

						{/* go to login  */}
						<p className='text-center mt-3'>
							Already have an account?
							<Link
								to={"/login"}
								className='text-[#F9A51A]'
							>
								{" "}
								Login
							</Link>
						</p>
					</div>
				</form>

				<SocialMedia />
			</div>
		</div>
	);
};

export default Register;