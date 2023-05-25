/** @format */

import React, { useState } from "react";
import NavBar from "../../Share/NavBar";
import Footer from "../../Share/Footer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "../PdfGen";


const Blog = () => {
	

	return (
		<div className=''>
			<NavBar></NavBar>
			<div className="flex items-center justify-center mt-4">
				<PDFDownloadLink
					document={<MyPDF />}
					fileName='blog.pdf'
					className='bg-blue-500 py-2 px-4 rounded-md text-white '
				>
					{({ blob, url, loading, error }) =>
						loading ? "Loading document..." : "PDF Generator"
					}
				</PDFDownloadLink>
			</div>

			<div className='min-h-[300px] page_container'>
				<h1 className='text-4xl font-bold text-center py-2'>Blog</h1>

				<p className='font-bold text-xl'>
					Q1. Tell us the differences between uncontrolled and
					controlled components.
				</p>
				<p>Ans.</p>
				<p className='font-bold'>Uncontrolled Components</p>
				<ul>
					<li>Managed internally by the browser</li>
					<li>Generally less complex to implement</li>
					<li>Updates to state not tracked externally</li>
					<li>Limited control over how state is managed</li>
				</ul>
				<p className='font-bold'>Controlled Components</p>
				<ul>
					<li>
						Managed externally by a state management library or
						framework
					</li>
					<li>
						Can be more complex to implement, but can offer more
						functionality and better user experience
					</li>
					<li>
						Updates to state tracked and managed by external logic
					</li>
					<li>
						More control and flexibility over how state is managed
					</li>
				</ul>

				<p className='mt-5 font-bold text-xl'>
					Q2. How to validate React props using PropTypes.
				</p>
				<p>Ans.</p>
				<ul>
					<li> PropTypes.any: The prop can be of any data type.</li>
					<li> PropTypes.bool : The prop should be a Boolean.</li>
					<li> PropTypes.number : The prop should be a number.</li>
					<li> PropTypes.string : The prop should be a string.</li>
					<li> PropTypes.func : The prop should be a function.</li>
					<li> PropTypes.array : The prop should be an array.</li>
					<li> PropTypes.object : The prop should be an object.</li>
				</ul>

				<p className='mt-5 font-bold text-xl'>
					Q3. Tell us the difference between nodejs and express js.
				</p>
				<p>Ans.</p>
				<p>
					NodeJS is the package, which provides the JavaScript
					run-time environment, whereas Express is a framework that
					sits on top of NodeJS and helps us to handle requests and
					responses.
				</p>
				<p className='mt-5 font-bold text-xl'>
					Q4. What is a custom hook, and why will you create a custom
					hook?
				</p>
				<p>Ans.</p>
				<p>
					A custom hook is created by defining a function that uses
					one or more of the existing React hooks, such as useState,
					useEffect, or useContext, to encapsulate a specific piece of
					functionality. Custom hooks can then be used in any
					component that needs that functionality by calling the hook
					function.
				</p>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Blog;
