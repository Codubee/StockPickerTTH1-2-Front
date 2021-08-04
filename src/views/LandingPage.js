import React from 'react';
import Features from '../components/Features';
import Explanation from '../components/Explanation';
import {Container} from 'reactstrap'
import CollapseComponent from '../components/Collapse'

function LandingPage() 
{
  return (
        <Container>
            <CollapseComponent/>
            <Features/>
        </Container>
    )
}

export default LandingPage;