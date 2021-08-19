import React from 'react';
import { Collapse, Button } from 'reactstrap';
import Matches from './Matches';
import axios from 'axios'

//This is the function that will be producing the toggle
class CollapseComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false,matches: [],userId:this.props.userId }
    this.setIsOpen = this.setIsOpen.bind(this)
  }

  setIsOpen() {

    this.setState({ isOpen: !this.state.isOpen })
    axios.get("https://stockpicker-tth12-1-back.herokuapp.com/getMatches?userId="+this.state.userId)
      .then((response) => {
        console.log(response.data.matches)
        this.setState({

          // Response.data has the data that came back from the GET http request
          matches: response.data.matches
        })

      })
      .catch((error) => {
        console.log(error);

      })
  }

  render() {
    return (
      <div className="text-center">
        <Button color="primary" onClick={this.setIsOpen} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.isOpen}>
          <Matches matches={this.state.matches} userId={this.props.userId} />
        </Collapse>
      </div>
    );
  }
}

export default CollapseComponent;