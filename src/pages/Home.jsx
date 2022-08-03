import React from 'react';
import Products from '../components/Products';

const Home = () => {
	return (
		<div className="container">
			<h2 className="text-2xl font-bold my-8">
				Welcome to the Redux Toolkit Cart Demo
			</h2>
			<section>
				<h3 className="text-xl font-bold mb-4">Products</h3>
				<Products />
			</section>
		</div>
	);
};

export default Home;
