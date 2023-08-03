import React from "react";
import PropTypes from "prop-types"

const Container = (props) => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-secondary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{props.title}</h1>
                    <p className="col-md-12 fs-5">{props.description}</p>
                    <button className="btn btn-primary btn-lg" type="button">{props.buttonLabel}</button>
                </div>
            </div>
        </div>
    )
}
Container.propTypes = {
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    description: PropTypes.string,
}
export default Container;