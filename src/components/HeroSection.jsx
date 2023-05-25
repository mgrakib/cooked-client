import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { AuthContext } from '../Provider/AuthProvider';

const HeroSection = () => {
    const { heroImg } = useContext(AuthContext);
    console.log();
    
    return (
		<>
			<Swiper
				pagination={{
					type: "progressbar",
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'
			>
				{heroImg.map(img => (
					<SwiperSlide key={img.id}>
						<LazyLoadImage
							alt={img.image_url}
							effect='blur'
							src={img.image_url}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default HeroSection;