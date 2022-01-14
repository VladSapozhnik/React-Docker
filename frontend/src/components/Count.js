import React from "react";

import PropTypes from 'prop-types'

function Count(prop) {
    return (
        <div>
            <div>{prop.onCreated}</div>
            <div onClick={prop.increment} className="btn">+1</div>
            <div onClick={prop.decrement} className="btn">-1</div>
        </div>
    )
}

Count.propTypes = {
    onCreated: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
}

export default Count