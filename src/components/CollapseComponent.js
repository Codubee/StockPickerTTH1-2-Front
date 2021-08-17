import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Matches from './Matches';

//This is the function that will be producing the toggle
function CollapseComponent(params) {

const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Matches/>
      </Collapse>
    </div>
  );
}

export default CollapseComponent;