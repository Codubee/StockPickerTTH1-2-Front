import React from 'react';

function Description(props) {

    return (
        <div>
            <h3>Stock Descriptions</h3>
            {props.companyData.companyName}, {props.companyData.symbol}, {props.companyData.currentPrice}
        </div>
    )
}
export default Description;