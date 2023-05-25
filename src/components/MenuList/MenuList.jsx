import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MenuList = () => {
    const { recipsData } = useContext(AuthContext);

    
    
    return (
		<div className='page_container my-10'>
			<h1 className='text-4xl font-bold text-center py-2'>MENU</h1>
			<div className='grid md:grid-cols-3 gap-5'>
				<div>
					<h3 className='text-center'>MEAT</h3>
					{recipsData[0]?.MEAT.map(list => (
						<div
							key={list.id}
							className='flex items-center gap-2'
						>
							<p>{list.name}</p>
							<hr className='border-gray-600 w-[40%] border-dotted border-2 ' />
							<p className='ms-auto text-[#CDA400] font-bold'>
								${list.price}
							</p>
						</div>
					))}
				</div>
				<div>
					<h3 className='text-center'>SIDES</h3>
					{recipsData[1]?.SIDES.map(list => (
						<div
							key={list.id}
							className='flex items-center gap-2'
						>
							<p>{list.name}</p>
							<hr className='border-gray-600 w-[40%] border-dotted border-2 ' />
							<p className='ms-auto text-[#CDA400] font-bold'>
								${list.price}
							</p>
						</div>
					))}
				</div>
				<div>
					<h3 className='text-center'>PASTA</h3>
					{recipsData[1]?.SIDES.map(list => (
						<div
							key={list.id}
							className='flex items-center gap-2'
						>
							<p>{list.name}</p>
							<hr className='border-gray-600 w-[40%] border-dotted border-2 ' />
							<p className='ms-auto text-[#CDA400] font-bold'>
								${list.price}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MenuList;