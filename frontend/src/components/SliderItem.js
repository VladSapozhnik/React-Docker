import React from "react";
import PropTypes from "prop-types";

function SliderItem (prop) {
    return (
        <div>
            <img src={prop.images} />
            <p className="legend">{prop.title}</p>
        </div>
    )
}

SliderItem.protoType = {
    images: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default SliderItem