import React from 'react';

function Description() {

    // Create an array of javascript objects
    const stocks = [
        { companyName: "Apple", symbol: "AAPL", price: 12.98 }
    ]
    return (
        <div>
            <h3>Stock Descriptions</h3>
            {
                /*
                    Call the map function on the constant created above
                    Make sure to add a div with a key or else react complains
                */
                stocks.map((stock, id) => (
                    <div key={id}>
                        {/* 
                            Use curly braces to show the data. 
                            The person being used here comes from the map function created
                            right above
                         */}
                        <p>{stock.companyName}, {stock.symbol},{stock.price}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Description;