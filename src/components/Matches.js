import React from 'react'
import { Table } from 'reactstrap'

function Matches(props) {


    if (props.matches.length > 0) {

        return (
            /*    Call the map function on the constant created above
                  Make sure to add a div with a key or else react complains
            */

            <Table hover>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                    </tr>
                </thead>{
                    props.matches.map((companies, id) => (

                        <tbody>
                            <tr>
                                <td>{companies.companyName}</td>
                                <td>{companies.symbol}</td>
                                <td>{companies.currentPrice}</td>
                            </tr>
                        </tbody>

                    ))
                }
            </Table>
        )
    }
    else
        return <h2>No matches yet</h2>
}

export default Matches