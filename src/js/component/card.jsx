import React from "react";



//create your first component
const Card = (props) => {
	return (

		<div className="col-sm-3 mb-3 mb-sm-0" >
			<div className="card" >
				<img src={props.imgcrd} className="card-img-top img-fluid" alt="..." />
				<div className="card-body text-center">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
				<div className="card-footer bg-tertiary text-center">
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>

	)
};

export default Card;