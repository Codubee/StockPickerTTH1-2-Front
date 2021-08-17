import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText,  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,} from 'reactstrap';
import jiraimg from '../images/jira.png';
import nodejs from '../images/node.png';
import reactimg from '../images/react.png';
import postmanimg from '../images/postman.png';
import "../styles/Tools.css";


function Tools() 
{
  return (
        <div>
        
      
    <ListGroup className= "paper" >
      <ListGroupItem >
      
      <Card className="card">
        <CardImg top width="100%" src={jiraimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Jira</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://www.atlassian.com/software/jira">Jira Website</a></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
    
        <ListGroupItemText tag="h5">
        Jira, a task manager application was used in our agile developement of the StockPicker Project.

        </ListGroupItemText>
     

    
    
      </ListGroupItem>
<ListGroupItem>
<Card className="card">
        <CardImg top width="100%" src={nodejs} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Jira</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://nodejs.org/en/">Node.js Website</a></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
    
        <ListGroupItemText tag="h5">
        Node.js was used in our application to connect to google chrome's javascrpt runtime.

        </ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
<Card className="card">
        <CardImg top width="100%" src={reactimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Jira</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://reactjs.org/">React Website</a></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
    
        <ListGroupItemText tag="h5">
       React which is a JavaScript library for building user interfaces was used in constructing the pages of our application.
        </ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
<Card className="card">
        <CardImg top width="100%" src={postmanimg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Jira</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://www.postman.com/">PostMan Website</a></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
    
        <ListGroupItemText tag="h5">
            Postman was used in testing api routes for data calls. 
        </ListGroupItemText>
</ListGroupItem>
     
     

    </ListGroup>
            </div>
    )
}

export default Tools;