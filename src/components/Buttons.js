import React from 'react';
import { Button } from 'reactstrap'

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button color="success">Yes</button>
                <button color="danger">No</button>
            </div>
        )
    }
}

export default Buttons;