import React from "react";
import PropTypes from "prop-types"


//create your first component
const Card = (props) => {
	return (

		<div className="col-sm-3 mb-3 mb-sm-0">
			<div className="card">
				<img src={props.image} className="card-img-top img-fluid" alt="..." />
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer bg-tertiary text-center">
					<a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
				</div>
			</div>
		</div>
	)
};

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string,
	description: PropTypes.string,
}

export default Card;