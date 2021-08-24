import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Features() {
    return (
        <div>
            <h2 className="text-center">Features</h2>
            <br></br>
            <br></br>
            <ListGroup>
                <ListGroupItem>Display Stock Info</ListGroupItem>
                <ListGroupItem>Match with Potential Stocks</ListGroupItem>
                <ListGroupItem>Stocks You've Matched With</ListGroupItem>
            </ListGroup>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Features;