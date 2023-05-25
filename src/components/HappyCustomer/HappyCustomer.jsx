import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useFetcher } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';

const HappyCustomer = () => {
    const { userFeedback } = useContext(AuthContext);
    console.log(userFeedback);
    
    return (
		<div>
			<div className=' relative bg-[#262626] page_container'>
                <h2 className='text-white text-5xl font-bold text-center upp
                 py-3' >Happy Client</h2>
				<div className=' w-full    grid md:grid-cols-3 gap-3 py-5'>
					{userFeedback.map((feedback, i) => (
						<div
							key={i}
							className='card bg-base-100 shadow-xl'
						>
							<div className='rounded-full overflow-hidden'>
								<figure className='p-4'>
									<LazyLoadImage
										alt={feedback.userPhoto}
										effect='blur'
										src={feedback.userPhoto}
										className='w-[80px] h-[80px] object-cover rounded-full'
									/>
								</figure>
							</div>

							<div className='card-body'>
								<h2 className='card-title font-bold'>
									{feedback.user}
								</h2>
								<p>{feedback.comment}</p>
								<p className='flex items-center gap-3'>
									Rating:{" "}
									{
										<Rating
											placeholderRating={feedback.rating}
											readonly
											emptySymbol={<FaRegStar />}
											placeholderSymbol={
												<FaStar className='text-yellow-500' />
											}
											fullSymbol={
												<FaStar className='text-yellow-500' />
											}
										/>
									}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HappyCustomer;