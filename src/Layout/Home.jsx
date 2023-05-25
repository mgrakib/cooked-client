import React from 'react';
import NavBar from '../Share/NavBar';
import HeroSection from '../components/HeroSection';
import Footer from '../Share/Footer';
import ChefsCard from '../components/ChefsCard/ChefsCard';
import RecipesCard from '../components/RecipesCard/RecipesCard';
import MenuList from '../components/MenuList/MenuList';
import BestFood from '../components/BestFood/BestFood';
import HappyCustomer from '../components/HappyCustomer/HappyCustomer';

const Home = () => {
    return (
		<div>
			<NavBar />
			<HeroSection />
			<ChefsCard />
			<MenuList />
			<HappyCustomer />
			<Footer />
		</div>
	);
};

export default Home;