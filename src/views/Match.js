import React from 'react'
import Description from '../components/Description'
import { Container,Button } from 'reactstrap';
import View from '../components/View';
import axios from 'axios'
import CollapseComponent from '../components/CollapseComponent'

class Match extends React.Component{


  constructor(props){
    super(props)
    this.state = { companyData: "",image:"" }
    this.clickedYes = this.clickedYes.bind(this)
    this.clickedNo = this.clickedNo.bind(this)
  }

  clickedYes() {
    this.setState({ company: "World" })
  }
  clickedNo() {
    this.setState({ company: "World" })

  }

  componentDidMount() {

    // Sending a GET http request
    axios.get("https://stockpicker-tth12-1-back.herokuapp.com/getStockData")
    
    // After the request is complete we get a response. This method handles the response.
        .then((response) => {

            // Print the data to the console located in your web browser
            console.log(response.data.Data);

            // Change the value of age in your state object
            this.setState({
                
                // Response.data has the data that came back from the GET http request
                companyData: response.data.Data,
                image: response.data.Data.image,
            })
        })

  }

  render(){
    
    return(
      // Remove the hello world from here and place your components
  
      <Container className="text-center">
        <Description/>
        <View image={this.state.image}/>
        <Description companyData={this.state.companyData}/>
        <Button color="success" onClick={this.clickedYes}>Yes</Button>
        <Button color="danger" onClick={this.clickedNo}>No</Button>

        <CollapseComponent/>
      </Container>  
      
    )
  }

}

export default Match;
