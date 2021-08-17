import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle
} from 'reactstrap';
import '../styles/View.css'
function View(props) {
  return (
    <div>
          <img  className="image" src="https://picsum.photos/900" alt="Stock image" />
    </div>
  );
}

export default View;
