import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';

import Login from '../components/Login/Login';
import Home from '../Layout/Home';
import Register from '../components/Register/Register';
import ChefRecipiPage from '../components/ChefRecipiPage/ChefRecipiPage';
import Blog from '../components/Blog/Blog';
import About from '../components/About/About';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import ErrorPage from '../components/ErrorPage/ErrorPage';
	
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "blog",
				element: <Blog />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "chef-recipi-page/:id",
				element: (
					<PrivateRouter>
						<ChefRecipiPage />
					</PrivateRouter>
				),
				loader: ({ params }) =>
					fetch(
						`https://ten-assignment-server-mgrakib.vercel.app/chef-details/${params.id}`
					),
			},
		],
	},
]);

export default router;