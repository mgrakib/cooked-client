import React, { useState } from 'react';
import NavBar from '../../Share/NavBar';
import Footer from '../../Share/Footer';
import { useLoaderData } from 'react-router-dom';
 import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipiPage = () => {
    const chefDetail = useLoaderData();
    

    const {
        _id,
		photo_URL,
		name,
		description,
		likes,
		num_recipes,
		experience,
		resipi,
	} = chefDetail;
    
    const handelFavorit = e => {
        toast("the recipe is your favorite");
		// e.target.style.display = "none";
		e.target.disabled = true;
    }
    return (
		<div>
			<NavBar />
			<div className='page_container'>
				{/* bannar  */}
				<div>
					<div className='md:flex gap-5 p-4 rounded-md bg-base-100 shadow-xl'>
						<figure className='w-[100%]  object-cover'>
							<LazyLoadImage
								src={photo_URL}
								alt='Movie'
								effect='blur'
								className=''
							/>
						</figure>
						<div className='p-2'>
							<h2 className='card-title'>{name}</h2>
							<p>{description}</p>
							<p>
								Likes:{" "}
								<span className='font-bold'>{likes}</span>
							</p>
							<p>
								Number Of Recipes:{" "}
								<span className='font-bold'>{num_recipes}</span>
							</p>
							<p>
								Experience:{" "}
								<span className='font-bold'>
									{experience} Year
								</span>
							</p>
						</div>
					</div>
				</div>

				{/* recipi  */}
				<div className='my-5'>
					<div className='overflow-x-auto'>
						<table className='table table-zebra w-full'>
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th>Name</th>
									<th>Ingredients</th>
									<th>Cooking method</th>
									<th>Rating</th>
									<th>Favorit</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								{resipi.map((r, i) => (
									<tr key={r._id}>
										<th>{i + 1}</th>
										<td>{r.recipe}</td>
										<td>
											{r.ingredients.map(
												(ingredients, i) => (
													<p key={i}>{ingredients}</p>
												)
											)}
										</td>
										<td>
											{r.cooking_method.map(
												(cooking_method, i) => (
													<p key={i}>
														{cooking_method}
													</p>
												)
											)}
										</td>
										<td>{r.rating}</td>
										<td>
											<button
												onClick={handelFavorit}
												className='btn-primary py-2 px-3 text-white rounded-md'
											>
												Att to Favorit
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default ChefRecipiPage;