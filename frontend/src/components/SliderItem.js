import React from "react";

function SliderItem (prop) {
    return (
        <div>
            <img src={prop.images} />
            <p className="legend">{prop.title}</p>
        </div>
    )
}

export default SliderItem