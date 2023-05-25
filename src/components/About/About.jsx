import React from 'react';
import NavBar from '../../Share/NavBar';
import Footer from '../../Share/Footer';

const About = () => {
    return (
		<div className=''>
			<NavBar></NavBar>
			<div className='min-h-[300px] page_container'>
				<h1 className='text-4xl font-bold text-center py-2'>About</h1>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default About;