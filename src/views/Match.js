import React from 'react'
import Description from '../components/Description'

import { Container } from 'reactstrap';
import View from '../components/View';

import Matches from '../components/Matches'
import axios from 'axios'


class Match extends React.Component{
  constructor(props) {
    super(props);
    // Creating a state object with empty values
    this.state = { companyName: "", symbol: "", image: "", stockId: "", currentPrice: "" };
}

  // Using the componentDidMount lifecycle method to trigger the API call.
    // This method gets called third after the render method.
    componentDidMount() {

      // Sending a GET http request
      axios.get("https://stockpicker-tth12-1-back.herokuapp.com/getStockData")
      
      // After the request is complete we get a response. This method handles the response.
          .then((response) => {

              // Print the data to the console located in your web browser
              console.log(response.data);

              // Change the value of age in your state object
              this.setState({
                  
                  // Response.data has the data that came back from the GET http request
                  companyName: response.data.companyName,
                  symbol: response.data.symbol,
                  image: response.data.image,
                  stockId: response.data.stockId,
                  currentPrice: response.data.currentPrice
              })
          })
  }


  render(){
    return(
      // Remove the hello world from here and place your components
      <div>
        <Container>
          <View/> 
          <Description/>
          <Matches/>
        </Container>  
      
        <div>
          <h3>Data for your stock matches: </h3>
          <p>Company Name: {this.state.companyName}</p>
          <p>Symbol: {this.state.symbol}</p>
          <p>Image: {this.state.image}</p>
          <p>Stock ID: {this.state.stockId}</p>
          <p>Current Price: {this.state.currentPrice}</p>
        </div>
      </div>

    )
  }
}

export default Match;
