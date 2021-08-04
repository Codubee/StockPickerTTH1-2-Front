import React from 'react';
import TeamComponent from '../components/TeamComponent'
import Features from '../components/Features';
import Explanation from '../components/Explanation';
import {Container} from 'reactstrap'


function LandingPage() 
{
  return (
        <Container>
            <Explanation/>
            <TeamComponent />        
            <Features/>
        </Container>
    )
}

export default LandingPage;