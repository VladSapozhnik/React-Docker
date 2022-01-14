import React from "react";

import PropTypes from "prop-types";

function Item (props) {
    return (
        <div>
            <div>{props.id}.{props.item}</div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
}

export default Item