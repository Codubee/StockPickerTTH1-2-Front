import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

function View(props) {
  return (
    <Card>
    
    <CardBody>
          <CardTitle tag="h5">Stock Name</CardTitle>
          <CardImg top width="100%" src={props.image} alt="Stock image" />
        </CardBody>
     </Card>
      );
}

export default View;
