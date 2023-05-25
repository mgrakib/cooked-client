import React from 'react';
import bg from "../../assets/bg.jpeg";
import order1 from "../../assets/order1.jpeg";
import order2 from "../../assets/order2.jpeg";
import order3 from "../../assets/order3.jpeg";
import order4 from "../../assets/order4.jpeg";

const BestFood = () => {
    return (
		<div
			style={{
				backgroundImage: `linear-gradient( #000 , rgba(0, 0, 0, 0)30%), url(${bg})`,
				backgroundSize: "cover",
			}}
			className='page_container text-center text-white'
		>
			<h1 className='text-4xl font-bold text-center py-2'>Catering</h1>
			<p>please call at least 24 hours in advance for catering orders</p>
			<div className='grid md:grid-cols-4 gap-5 my-7'>
				<div className='bg-white py-5'>
					<div className='w-[130px] h-[130px] rounded-full overflow-hidden mx-auto'>
						<img
							src={order1}
							alt=''
						/>
					</div>

					<p className='text-black font-bold py-4'>party platters</p>
				</div>

				<div className='bg-white py-5'>
					<div className='w-[130px] h-[130px] rounded-full overflow-hidden mx-auto'>
						<img
							src={order3}
							alt=''
						/>
					</div>

					<p className='text-black font-bold py-4'>sea food</p>
				</div>

				<div className='bg-white py-5'>
					<div className='w-[130px] h-[130px] rounded-full overflow-hidden mx-auto'>
						<img
							src={order2}
							alt=''
						/>
					</div>

					<p className='text-black font-bold py-4'>party platters</p>
				</div>

				<div className='bg-white py-5'>
					<div className='w-[130px] h-[130px] rounded-full overflow-hidden mx-auto'>
						<img
							src={order4}
							alt=''
						/>
					</div>

					<p className='text-black font-bold py-4'>vegan desserts</p>
				</div>
			</div>
		</div>
	);
};

export default BestFood;