import React from 'react';
import { Button } from 'reactstrap'

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Button color="success">Yes</Button>
                <Button color="danger">No</Button>
            </div>
        )
    }
}

export default Buttons;