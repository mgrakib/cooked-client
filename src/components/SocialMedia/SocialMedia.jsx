/** @format */

import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialMedia = () => {
	const location = useLocation();

	const from = location?.state?.from?.pathname || "/";
	const navigat = useNavigate();
	
	
	
	const { googleSingIn, gitHubSingIn } = useContext(AuthContext);
	// google login
	const handelGoogleLogin = () => {
		console.log("rakib");
		googleSingIn()
			.then(res => {navigat(`${from}`)})
			.catch(error => console.log(error.message));
	};

	// gitHub login
    const handelGitHubLogin = () => {
        console.log('cl');
        
        gitHubSingIn()
            .then(res => { navigat(`${from}`);})
            .catch(error => console.log(error.message));
	};
	return (
		<div className='px-10'>
			{/* or */}
			<div className='flex items-center justify-between'>
				<hr className='border-gray-600 w-[45%]' />
				<p>OR</p>
				<hr className='border-gray-600 w-[45%]' />
			</div>

			{/* social media login  */}
			<div className='flex flex-col gap-3'>
				{/* google LogIn  */}
				<div
					onClick={handelGoogleLogin}
					className='py-1 px-3 border border-gray-500 rounded-3xl flex items-center gap-3 cursor-pointer'
				>
					<FaGoogle className='text-[30px] text-black' />
					<p className='text-center w-full'>Continue with Google</p>
				</div>
				<div
					onClick={handelGitHubLogin}
					className='py-1 px-3 border border-gray-500 rounded-3xl flex items-center gap-3 cursor-pointer'
				>
					<FaGithub className='text-[30px] text-[#34A853]' />
					<p className='text-center w-full'>Continue with GitHub</p>
				</div>
			</div>
		</div>
	);
};

export default SocialMedia;
