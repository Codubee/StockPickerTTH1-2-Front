import React from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
class Matches extends React.Component {

    constructor(props) {
        
        super(props);
        this.triggerDeleteApi = this.triggerDeleteApi.bind(this);
    }

    triggerDeleteApi(stockId) {

        axios.delete("https://stockpicker-tth12-1-back.herokuapp.com/deleteStock?userId=" + this.props.userId + "&stockId=" + stockId)
        .then((response) => {
            alert('Stock delete. Press toggle again to refresh')
        })

    }
    render() {
        if(this.props.matches){

        return (
            /*    Call the map function on the constant created above
                  Make sure to add a div with a key or else react complains
            */
            <Table hover >
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>{

                    this.props.matches.map((companies, id) => (
                        <tbody key={id}>
                            <tr>
                                <td>{companies.companyName}</td>
                                <td>{companies.symbol}</td>
                                <td>{companies.price}</td>
                                <td><button onClick={()=>this.triggerDeleteApi(companies.stockId)}>Delete</button></td>
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

}

export default Matches