// Importing the neccessary libraries to properly complete the component.

import React from 'react';

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Button,
} from 'reactstrap';

// This section of the code represents the information designated for each team member that sent me information about themselves

const people = [
  { name: 'Daniel Jaramillo-Alejo', picture: 'http://placekitten.com/200/200', year: 'Junior', major: 'Computer Engineering', linkedIn: 'https://www.linkedin.com/in/danieljaramilloalejo/', gitHub: 'https://github.com/Daani1' },
  { name: 'Jonathan Arsola', picture: 'http://placekitten.com/700/700', year: 'Senior', major: 'N/A', linkedIn: 'https://www.linkedin.com/in/jonathan-arsola/', gitHub: 'https://github.com/arsoljon' },
  { name: 'Jazmine Fuentes', picture: 'http://placekitten.com/900/900', year: 'Senior', major: 'Biomedical Engineering', linkedIn: 'https://www.linkedin.com/in/jazmine-fuentes/', gitHub: 'https://github.com/jazfv' },
  { name: 'Jorge Cancino', picture: 'http://placekitten.com/650/650', year: 'Senior', major: 'Computer Science', linkedIn: 'https://www.linkedin.com/in/jorge-cancino-20b608146/', gitHub: 'https://github.com/jorgecan101' },
  { name: 'Neha Sapre', picture: 'http://placekitten.com/800/800', year: 'Sophomore', major: 'Computer Science', linkedIn: 'https://www.linkedin.com/in/neha2114/', gitHub: 'https://github.com/nehasapre' },
  { name: 'Gabriel Lasut', picture: 'http://placekitten.com/750/750', year: 'Junior', major: 'Computer Science', linkedIn: 'https://www.linkedin.com/in/gabriel-lasut-96177a1a8/', gitHub: 'https://github.com/GabeL-code' },
  { name: 'Sophie Hoang', picture: 'http://placekitten.com/400/400', year: 'Sophomore', major: 'Computer Science', linkedIn: 'https://www.linkedin.com/in/sophie-hoang-09745b210/', gitHub: 'https://github.com/sophie-th' },
  { name: 'Sameed Bhatti', picture: 'http://placekitten.com/500/500', year: 'Junior', major: 'Computer Science', linkedIn: 'https://www.linkedin.com/in/sameed-bhatti-8810901b5/', gitHub: 'https://github.com/SameedB' },

]

//This is the actual component.

/*
            The "people.map" is what allows the program to loop through each array value, while the "key = " allows the compiler to 
            know where/which index it is on. Any mention of "student. " is just calling the specific element it wants from the array.
*/

function TeamComponent(params) {
  return (
    <div>
      <Row>
        {
          people.map((student, id) => (
            <Col sm='3' key={id}>
              <Card body inverse style={{ backgroundColor: '#333' }}>
                <CardImg top width="100%" src={student.picture} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{student.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{student.year}</CardSubtitle>
                  <CardText>Major: {student.major}</CardText>
                  <CardLink href={student.gitHub}>Github Link</CardLink>
                  <CardLink href={student.linkedIn}>LinkedIn Link</CardLink>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};


export default TeamComponent;
