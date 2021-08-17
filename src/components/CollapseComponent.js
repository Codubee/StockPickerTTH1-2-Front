import React from 'react';
import { Collapse, Button } from 'reactstrap';
import Matches from './Matches';

//This is the function that will be producing the toggle
class CollapseComponent extends React.Component{
   constructor(props){
    super(props)
    this.state = {isOpen:false}
    this.setIsOpen = this.setIsOpen.bind(this)
  }
  setIsOpen(){
    this.setState({isOpen:!this.state.isOpen})
  }

  render() {
    return (
      <div className="text-center">
        <Button color="primary" onClick={this.setIsOpen} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.isOpen}>
          <Matches/>
        </Collapse>
      </div>
    );
  }
}

export default CollapseComponent;