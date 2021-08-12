import React from 'react'
import Description from '../components/Description'

import { Container } from 'reactstrap';
import View from '../components/View';

import Matches from '../components/Matches'


class Match extends React.Component{
  
  render(){
    return(
      // Remove the hello world from here and place your components
  
      <Container>
        <View/> 
        <Description/>
        <Matches/>
      </Container>  
      
    )
  }
}

export default Match;
