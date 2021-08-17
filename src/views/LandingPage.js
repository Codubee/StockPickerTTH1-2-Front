import React from 'react';
import Tools from '../components/Tools';
import TeamComponent from '../components/TeamComponent'
import Features from '../components/Features';
import Explanation from '../components/Explanation';
import {Container} from 'reactstrap'


function LandingPage() 
{
  return (
        <Container>
            <Explanation/>
            <Tools/>
            <Features/>
            <TeamComponent /> 
        </Container>
    )
}

export default LandingPage;
