import React, { useContext, useState } from 'react';
import logo from '../assets/logo-cooked-white.png'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';



const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [showNavbar, setShowNavbar] = useState(false);
	const handelLogOut = () => {
		
		logOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch(error => {
				// An error happened.
			});
	}

    return (
		<div className=' page_container bg-[#262626] flex items-center justify-between'>
			<Link to={"/"}>
				<img
					src={logo}
					alt=''
					className='w-[100px]'
				/>
			</Link>

			<div className='text-white hidden md:flex items-center gap-10 '>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active" : "default"
					}
					to={"/"}
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active" : "default"
					}
					to={"/blog"}
				>
					Blog
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "active" : "default"
					}
					to={"/about"}
				>
					About
				</NavLink>

				{user ? (
					<div className='flex items-center gap-2'>
						<div
							className='w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer'
							title={user.displayName}
						>
							<img
								src={user.photoURL}
								alt=''
							/>
						</div>
						<button
							onClick={handelLogOut}
							className='bg-red-500 px-3 py-2 rounded-md'
						>
							Log Out
						</button>
					</div>
				) : (
					<NavLink
						className={({ isActive }) =>
							isActive ? "active" : "default"
						}
						to={"/login"}
					>
						Login
					</NavLink>
				)}
			</div>

			<div
				className='flex items-center relative md:hidden'
				onClick={() => setShowNavbar(!showNavbar)}
			>
				{showNavbar ? (
					<FaTimes className='text-white cursor-pointer' />
				) : (
					<FaBars className='text-white cursor-pointer' />
				)}

				<div
					className={`text-white flex flex-col items-center  bg-[#262626] absolute z-[999] top-10 w-[300px] overflow-hidden duration-500 right-0 shadow-[2px_2px_2px_rgba(255,255,255)] ${
						showNavbar ? "max-h-[450px]" : "max-h-0"
					} `}
				>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active" : "default"
						}
						to={"/"}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active" : "default"
						}
						to={"/blog"}
					>
						Blog
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active" : "default"
						}
						to={"/about"}
					>
						About
					</NavLink>
					{user ? (
						<div className='flex items-center gap-2'>
							<div
								className='w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer'
								title={user.displayName}
							>
								<img
									src={user.photoURL}
									alt=''
								/>
							</div>
							<button
								onClick={handelLogOut}
								className='bg-red-500 px-3 py-2 rounded-md'
							>
								Log Out
							</button>
						</div>
					) : (
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/login"}
						>
							Login
						</NavLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;