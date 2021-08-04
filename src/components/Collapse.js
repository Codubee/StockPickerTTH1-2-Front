import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


function CollapseComponent(params) {

const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <h1>
          Hello World.
          </h1>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseComponent;