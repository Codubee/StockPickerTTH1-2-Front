import React from 'react'
import Description from '../components/Description'
import { Container } from 'reactstrap';
import View from '../components/View';
import Matches from '../components/Matches'
import CollapseComponent from '../components/CollapseComponent'
import Buttons from '../components/Buttons'

class Match extends React.Component{

  constructor(props){
    super(props)
    this.state = { company: "Apple" }
    this.clickedYes = this.clickedYes.bind(this)
    this.clickedNo = this.clickedNo.bind(this)
  }

  clickedYes() {
    this.setState({ company: "World" })
  }
  clickedNo() {
    this.setState({ company: "World" })
  }

  render(){
    
    return(
      // Remove the hello world from here and place your components
  
      <Container className="text-center">
        <View/> 
        <Description/>
        <Button color="success" onClick={this.clickedYes}>Yes</Button>
        <Button color="danger" onClick={this.clickedNo}>No</Button>
        <CollapseComponent/>
      </Container>  
      
    )
  }
  
}

export default Match;
