import React from 'react';

import facebook from '../assets/Logo/facebook.png'
import twitter from '../assets/Logo/twitter.png'
import instagram from '../assets/Logo/insta.webp'

const Footer = () => {
    return (
		<div className='page_container bg-black '>
			<div className='grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-2 md:gap-20 text-[#ffffff3d] pt-5'>
				<div className=''>
					<h2 className='text-[28px] text-white'>Coocked</h2>
					<p className='text-[14px] my-2'>
						There are many variations of passages of Lorem Ipsum ,
						but the majority have suffered alteration in some form.
					</p>
					<div className='mt-2 flex items-center gap-3'>
						<div className='w-[40px] h-[40px] p-[10px] bg-white rounded-full'>
							<img
								src={facebook}
								alt=''
							/>
						</div>
						<div className='w-[40px] h-[40px] p-[10px] bg-white rounded-full'>
							<img
								src={twitter}
								alt=''
							/>
						</div>
						<div className='w-[40px] h-[40px] p-[10px] bg-white rounded-full'>
							<img
								src={instagram}
								alt=''
							/>
						</div>
					</div>
				</div>
				<div className=' grid grid-cols-2 md:grid-cols-4'>
					<div>
						<h4 className='text-[20px] text-white'>Company</h4>
						<ul>
							<li>About Us</li>
							<li>Work</li>
							<li>Latest News</li>
							<li>Careers</li>
						</ul>
					</div>
					<div>
						<h4 className='text-[20px] text-white'>Product</h4>
						<ul>
							<li>Prototype</li>
							<li>Plans & Pricing</li>
							<li>Customers</li>
							<li>Integrations</li>
						</ul>
					</div>
					<div>
						<h4 className='text-[20px] text-white'>Support</h4>
						<ul>
							<li>Help Desk</li>
							<li>Sales</li>
							<li>Become a Partner</li>
							<li>Developers</li>
						</ul>
					</div>
					<div>
						<h4 className='text-[20px] text-white'>Contact</h4>
						<ul>
							<li>524 Broadway , NYC</li>
							<li>+1 777 - 978 - 5570</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='my-10' />
			<div className='text-[#ffffff61] flex items-center justify-between'>
				<p>@2023 MG Rakib. All Rights Reserved</p>
				<p>Powered by MG Rakib</p>
			</div>
		</div>
	);
};

export default Footer;