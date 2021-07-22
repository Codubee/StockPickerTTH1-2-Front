import React from 'react';
import Features from '../components/Features';
import Explanation from '../components/Explanation';
import {Container} from 'reactstrap'

function LandingPage() 
{
  return (
        <Container>
            <Explanation/>
            <Features/>
        </Container>
    )
}

export default LandingPage;