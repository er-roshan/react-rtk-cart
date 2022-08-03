import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const items = useSelector((state) => state.cart);

	return (
		<header className="bg-black/60 text-white">
			<div className="container">
				<div className="flex items-center justify-between min-h-[80px]">
					<span className="font-bold italic">Redux Store</span>
					<div className="flex justify-end items-center space-x-10 font-semibold">
						<Link to="/">Home</Link>
						<Link to="/cart">Cart</Link>
						<span>Cart items: {items.length}</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
