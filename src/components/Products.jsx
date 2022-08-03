import React, { useState, useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/productSlice';

const Products = () => {
	const dispatch = useDispatch();
	const { data: products, status } = useSelector((state) => state.product);
	// const [products, setProducts] = useState([]);

	useEffect(() => {
		dispatch(fetchProducts());
		// const fetchProducts = async () => {
		// 	const res = await fetch('https://fakestoreapi.com/products').then((res) =>
		// 		res.json()
		// 	);
		// 	console.log(res);
		// 	setProducts(res);
		// };

		// fetchProducts();
	}, []);

	const handleAdd = (product) => {
		dispatch(add(product));
	};

	if (status === STATUSES.LOADING) {
		return <h2>Loading....</h2>;
	}

	if (status === STATUSES.ERROR) {
		return <h2>Oopsss!!! Something went wrong</h2>;
	}

	return (
		<div className="grid grid-cols-12 gap-8">
			{products.map((product, index) => (
				<div className="relative col-span-12 md:col-span-3" key={index}>
					<div className="flex flex-col justify-center items-center shadow-md h-full bg-white rounded-xl p-4">
						<img src={product.image} alt="" className="w-fit h-20 mb-4" />

						<h4 className="text-base font-bold text-center">{product.title}</h4>
						<h5 className="font-semibold mb-2">{product.price}</h5>
						<button
							onClick={() => handleAdd(product)}
							className="bg-purple-600 hover:bg-purple-800 text-white text-sm py-1 px-2 rounded-md"
						>
							Add to cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
