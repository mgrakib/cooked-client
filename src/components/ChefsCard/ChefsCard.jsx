import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SingleChefCard from './SingleChefCard';

const ChefsCard = () => {
    const { allChefsData } = useContext(AuthContext);
    return (
		<div className='page_container grid md:grid-cols-3 gap-10'>
            {
                allChefsData.map(chef => <SingleChefCard key={chef._id} chef={ chef} />)
            }
		</div>
	);
};

export default ChefsCard;