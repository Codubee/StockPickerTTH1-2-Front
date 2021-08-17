import React from 'react';
import Tools from '../components/Tools';
import TeamComponent from '../components/TeamComponent'
import Features from '../components/Features';
import Explanation from '../components/Explanation';
import {Container} from 'reactstrap'
import WeatherAPI from '../ApiCall/WeatherAPI';

class LandingPage extends React.Component 
{
    render() {
        return (
            <Container>
                <WeatherAPI/>
            </Container>
        )
    }
}
/*<Explanation/>
 <Tools/>
<Features/>
<TeamComponent />*/
export default LandingPage;
