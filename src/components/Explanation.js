import React from 'react'
import {Jumbotron} from 'reactstrap'

function Explanation() {
    return (
        <Jumbotron>
            <h1>Stock Picker</h1>
            <p>A web application that gives people an easier way to pick a stock.</p>
            <p>This was created in Summer 2021 by students of Codubee.</p>
            <h2>How This Works:</h2>
            <ol>
                <li>The application will provide you information on a stock</li>
                <li>Swipe for "yes" or "no"</li>
                <li>Loop through steps 1 and 2 until you're satisfied</li>
                <li>Look at your chosen stocks</li>
            </ol>
        </Jumbotron>
    );
}

export default Explanation;