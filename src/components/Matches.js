import React from 'react'
import { Table } from 'reactstrap'

function Matches() {
    
    // companies that the user has matched with
    const companies = [
        {companyName: "Apple", symbol: "aapl", price: "12.98"}
    ]

    return (                
                /*    Call the map function on the constant created above
                      Make sure to add a div with a key or else react complains
                */

                companies.map((companies, id) => (
                    <div key={id}>
                        {/* 
                            Use curly braces to show the data. 
                            The person being used here comes from the map function created
                            right above
                         */}
                         <Table hover>
                             <thead>
                                 <tr>
                                     <th>Company Name</th>
                                     <th>Symbol</th>
                                     <th>Price</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td>{companies.companyName}</td>
                                     <td>{companies.symbol}</td>
                                     <td>{companies.price}</td>
                                 </tr>
                             </tbody>
                         </Table>
                    </div>
                ))
    )
}

export default Matches