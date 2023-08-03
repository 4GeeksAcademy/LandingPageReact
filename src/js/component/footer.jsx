import React from "react";
import PropTypes from "prop-types"


const Footer = (props) => {
    return (
        <div className="bg-dark text-bg-primary text-center mt-2">
            {props.description}
        </div>

    );
};
Footer.propTypes = {
    description: PropTypes.string,
}
export default Footer;