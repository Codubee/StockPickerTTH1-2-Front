import React from 'react'
import Description from '../components/Description'
import { Container,Button } from 'reactstrap';
import axios from 'axios'
import CollapseComponent from '../components/CollapseComponent'

class Match extends React.Component{


  constructor(props){
    super(props)
    this.state = { companyData: "",image:"",userId:Math.floor(Math.random() * 9999) }
    this.clickedYes = this.clickedYes.bind(this)
    this.clickedNo = this.clickedNo.bind(this)
    this.getStock = this.getStock.bind(this)
  }
  

  clickedYes() {
    const body = {userId:this.state.userId,stock:this.state.companyData}
    axios.post("https://stockpicker-tth12-1-back.herokuapp.com/addStock",body)    
    .then((response) => {
      this.getStock()
    })
  }
  clickedNo() {
    this.getStock()

  }

  getStock(){
     // Sending a GET http request
     axios.get("https://stockpicker-tth12-1-back.herokuapp.com/getStockData")
    
     // After the request is complete we get a response. This method handles the response.
         .then((response) => {
 
             // Change the value of age in your state object
             this.setState({
                 
                 // Response.data has the data that came back from the GET http request
                 companyData: response.data.Data,
                 image: response.data.Data.image,
             })
         })
  }

  componentDidMount() {

   this.getStock()

  }

  render(){
    
    return(
      // Remove the hello world from here and place your components
  
      <Container className="text-center">
        <br></br>
        <br></br>
        <Description companyData={this.state.companyData}/>
        <div>
          <br></br>
          <Button color="danger" onClick={this.clickedNo} >Sell</Button>
          <Button color="success" onClick={this.clickedYes} style={{marginLeft:"5px"}}>Buy</Button>
          <br></br>
          <br></br>
        </div>
        <CollapseComponent userId={this.state.userId}/>
      </Container>  
      
    )
  }

}

export default Match;
