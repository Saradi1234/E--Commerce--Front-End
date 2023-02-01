import React from "react";
import ProductCard from "./ProductCard";

function ProductsPage(props) {
	const products = props.info.map(items =>
		<ProductCard product={items} />)
	return (
		<>
			<div className="products">
				{products}
			</div>
		</>
	);
}

export default ProductsPage