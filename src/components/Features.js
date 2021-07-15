import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Features() 
{
  return (
        <div>
            <h3>Available Features: </h3>
            <ListGroup>
                <ListGroupItem>Display Stock Info</ListGroupItem>
                <ListGroupItem>Match with Potential Stocks</ListGroupItem>
                <ListGroupItem>Stocks You've Matched With</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Features;