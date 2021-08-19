import React from 'react';

function Description(props) {


    if (props.companyData) {
        return (
            <div>
                <h3>
                    {props.companyData.companyName}, {props.companyData.symbol}, {props.companyData.currentPrice}
                </h3>
            </div>
        )
    }
    else {
        return <></>
    }
}
export default Description;