import React from 'react';
import '../styles/View.css'
function View(props) {
  return (
    <div>
          <img  className="image" src={props.image} alt="company" />
    </div>
  );
}

export default View;
