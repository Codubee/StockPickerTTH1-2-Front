

/*
  This component will trigger an API request when the user clicks a button
  It also uses the constructor and render lifecycle methods.
    The order that these lifecycle methods get called is 
    1. Constructor
    2. render
*/

// Import Axios to make the http request. Make sure to install it using NPM
import React from 'react';


import axios from 'axios'



// Extend React.Component
class ApiCall extends React.Component {

    // A constructor is a good place to setup inital state object
    // It is the first called method during a components lifecycle
    constructor(props) {
        super(props);
        // Creating a state object with an empty age
        this.state = { matches: '' };
        /*
            When creating methods in a class component you 
            must bind the 'this' keyword to those methods
            If you do not do this step then you will not be 
            able to use the 'this' keyword in those methods
        */
        this.triggerApi = this.triggerApi.bind(this);
    }

    // This method gets called when the user clicks the button.
    // It is not a react lifecycle method. It can be named anything.
    // Here I named it triggerApi to make it clear what the method is doing.
    triggerApi() {
        
      
    
    
            
            axios.get("https://stockpicker-tth12-1-back.herokuapp.com/getMatches?userId=99")
                .then((response) => {
                    console.log(response.data)
                    this.setState({
                    
                        // Response.data has the data that came back from the GET http request
                        matches: response.data
                    })
                    
                })
                .catch((error) => {
                    console.log(error);
                    
                })
                
        
        // Sending a GET http request
 
    }

    // Render shows the user the HTML
    // It gets called second after the constructor during a components lifecycle
    render() {
        return (
            <div>
                <p>Click the button to trigger the API</p>

                {/* Displays a button to the user. When clicked the triggerApi method gets called */}
                <button onClick={this.triggerApi}>Submit</button>

                {/* Display the age to the user that comes back from the API request */}
                <h3>Expected Age: {this.state.Matches}</h3>
            </div>

        )
    }
}

// Export the component so that you can use it in other places
export default ApiCall;
