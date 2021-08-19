import React from 'react';
import { Button } from 'reactstrap'

class Buttons extends React.Component {
    constructor() {
        super()
        //Setting a default value inside of our state object
        this.state = { company: "Apple" }
        /*
            Whenever you are dealing with user interaction like a button click
            you have to bind the method to the this keyword.
            If you do not do so, you will not be able to change the state object
        */
        this.changeCompany = this.changeCompany.bind(this)
    }

    /*
        This is the method that will be called with a button click.
        It can be named anything you would like as long as it matches
        what you put with the onClick method in your button html.
    */
    changeCompany() {
        this.setState({ company: "World" })
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.state.company}</h1>

                <Button color="success" onClick={this.changeCompany}>Yes</Button>
                <Button color="danger" onClick={this.changeCompany}>No</Button>
            </div>
        )
    }
}

export default Buttons;