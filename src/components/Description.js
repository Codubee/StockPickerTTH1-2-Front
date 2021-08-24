import React from 'react'
import { Container, Spinner, Table } from 'reactstrap'
import { Card, CardTitle, CardText } from 'reactstrap'
import '../styles/Description.css'

function Description(props) {

    if (props.companyData.currentPrice) {
        return (
            <Container>
                <Card body outline color="secondary">
                    <CardTitle tag="h5">{props.companyData.companyName} - {props.companyData.symbol} </CardTitle>
                    <CardText>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Previous Day Price</th>
                                    <th>Current Price</th>
                                    <th>Change</th>
                                    <th>High of Day</th>
                                    <th>Low of Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >{props.companyData.previousClosePrice}</th>
                                    <th >{props.companyData.currentPrice}</th>
                                    <th className={props.companyData.change >= 0 ? 'green-text' : 'red-text' }>{props.companyData.change}</th>
                                    <th >{props.companyData.highPriceOfDay}</th>
                                    <th >{props.companyData.lowPriceOfDay}</th>
                                </tr>
                            </tbody>
                        </Table>
                    </CardText>
                </Card>
            </Container>
        )
    }
    else {
        return <Spinner></Spinner>
    }
}

export default Description