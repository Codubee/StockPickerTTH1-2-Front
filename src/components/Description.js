import React from 'react';

function Description(props) {


    if (props.companyData) {
        return (
            <div>
                <h3>Stock Descriptions</h3>
                {props.companyData.companyName}, {props.companyData.symbol}, {props.companyData.currentPrice}
            </div>
        )
    }
    else {
        return <></>
    }
}
export default Description;