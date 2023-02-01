import React from "react";

export default function ProductCard(props) {
	const [isVisible, setIsVisible] = React.useState(false);
	function show(e) {
		setIsVisible(true);
	}	
	function hide(e) {
		setIsVisible(false);
	}
	return (
		<>
			<div className="product-Container" onMouseOver={show} onMouseLeave={hide}>
				<img className="product-image" id={props} src={props.product.image} alt=""/>
				{isVisible ? <p className="desc"> {props.product.description} </p> : ""}
			</div>
		</>
	);
}