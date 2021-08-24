import React from 'react';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import jiraimg from '../images/jira.png';
import nodejs from '../images/node.png';
import reactimg from '../images/react.png';
import postmanimg from '../images/postman.png';
import "../styles/Tools.css";


function Tools() {
  return (
    <div className="tools-margin">
      <h2 className="text-center">Tools Used</h2>
      <br></br>
      <br></br>
      <Row>
        <Col sm="4" >
          <Card >
            <CardImg top width="100%" src={jiraimg} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Jira</CardTitle>
              <CardText>
                Jira, a task manager application was used in our agile developement of the StockPicker Project.
              </CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://www.atlassian.com/software/jira">Jira Website</a></CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4">
          <Card className="card">
            <CardImg top width="100%" src={nodejs} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Jira</CardTitle>
              <CardText>
                Node.js was used in our application to connect to google chrome's javascrpt runtime.
              </CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://nodejs.org/en/">Node.js Website</a></CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="card">
            <CardImg top width="100%" src={reactimg} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Jira</CardTitle>
              <CardText>
                React which is a JavaScript library for building user interfaces was used in constructing the pages of our application.
              </CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://reactjs.org/">React Website</a></CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="card">
            <CardImg top width="100%" src={postmanimg} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Jira</CardTitle>
              <CardText>
                Postman was used in testing api routes for data calls.
              </CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><a href="https://www.postman.com/">PostMan Website</a></CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Tools;