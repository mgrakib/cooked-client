import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const RecipesCard = () => {
    const { recipsData } = useContext(AuthContext);

    
    return (
		<div className='page_container my-10'>
			<h1 className='text-4xl font-bold text-center py-2'>All Recipes</h1>
			<div className='carousel w-[40px]'>
				{recipsData.map(recipi => (
					<div
						id={`item${recipi.id}`}
						className='carousel-item w-full'
						key={recipi.id}
					>
						<img
							src={recipi.image_url}
							className='w-full'
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center w-full py-2 gap-2'>
				{recipsData.map(r => (
					<a
						href={`#item${r.id}`}
						className='btn btn-xs'
						key={r.id}
					>
						{r.id}
					</a>
				))}

			</div>
		</div>
	);
};

export default RecipesCard;