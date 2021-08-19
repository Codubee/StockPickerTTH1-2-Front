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

  }

  render(){
    
    return(
      // Remove the hello world from here and place your components
  
      <Container className="text-center">
        <View/> 
        <Description/>
        <Buttons/>
        <CollapseComponent/>
      </Container>  
      
    )
  }
  
}

export default Match;
