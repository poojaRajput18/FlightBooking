import React from 'react';

const PriceClass = (props) => {
    return (
        <div>
            <div>${props.price}</div>
            <div>{props.class}</div>
         </div>
    )
};

export default PriceClass;