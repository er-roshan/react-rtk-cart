import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
	const items = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};

	return (
		<div className="container my-8">
			<h3 className="text-xl font-bold mb-4">Cart</h3>
			<div>
				{items.map((item, index) => (
					<div
						key={index}
						className="flex justify-between items-center bg-white p-4 mb-4 rounded-md"
					>
						<img src={item.image} alt="" className="w-20 h-20" />
						<h5>{item.title}</h5>
						<h6>{item.price}</h6>
						<div>
							<button
								onClick={() => handleRemove(item.id)}
								className="bg-red-600 hover:bg-red-800 text-white text-sm py-1 px-2 rounded-md"
							>
								Remove
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cart;
