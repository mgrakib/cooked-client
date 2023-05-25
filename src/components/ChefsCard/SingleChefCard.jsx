import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SingleChefCard = ({ chef }) => {
    const { _id, photo_URL, name, experience, num_recipes, likes } = chef;
    
	return (
		<div className='card glass'>
			{/* chef img */}
			<figure className='h-[250px]'>
				<LazyLoadImage
					alt={photo_URL}
					effect='blur'
					src={photo_URL}
				/>
			</figure>
			<div className='card-body'>
				{/* chef name  */}
				<h2 className='card-title'>{name}</h2>
				{/* chef expreienct */}
				<p>
					Years of experience :{" "}
					<span className='font-bold'>{experience}</span> Years
				</p>
				{/* number of recipes */}
				<p>
					Numbers of recipes :{" "}
					<span className='font-bold'>{num_recipes}</span>
				</p>
				{/* Likes */}
				<p>
					Likes : <span className='font-bold'>{likes}</span>
				</p>
				<Link
					to={`chef-recipi-page/${_id}`}
					className='card-actions w-full'
				>
					<button className='btn btn-primary w-full'>
						View Recipes
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SingleChefCard;