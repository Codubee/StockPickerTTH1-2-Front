import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

const View =(props) => {
  return (
    <Card>
    
    <CardBody>
          <CardTitle tag="h5">Stock Name</CardTitle>
          <CardImg top width="100%" src="https://picsum.photos/900" alt="Stock image" />
        </CardBody>
     </Card>
      );
}

export default View;