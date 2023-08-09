import logo from './logo.svg';
import './App.css';
import {buz, businessLists} from './components/Business.js'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
      <div>
        <Container className="topContainer">
        <Row className="SearchOptions">
          <Col></Col>
          <Col sm={3}>  Best <br></br> Match </Col>
          <Col sm={3}> Highest <br></br> Rated </Col>
          <Col sm={3}> Most <br></br>Reviewed </Col>
          <Col></Col>
        </Row> 
        <Row> 
          <Col md={2}></Col>
          <Col md={8}><hr></hr> </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="searchBarContainer">
          <Col></Col> 
          <Col md={5}> <input id='searchBar' type="text" placeholder="Search Businesses"/> </Col>
          <Col md={5}> <input id='searchBar' placeholder="Where"/> </Col>
          <Col></Col> 
        </Row>
        <Row>
        <Col></Col>
        <Col xl={2}><Button id="SearchButton" variant="success">Let's go</Button> </Col>
        <Col></Col>
        </Row>
        
        </Container>
      <div>
      <Container id="imagesContainer">
        <Row>
      {businessLists.map(d =>

          <Col md={4}>
          <span>{d.name}</span><br></br>
          <span>{d.category}</span><br></br>
          <span>{d.address}</span><br></br>
          <img src={d.imageSrc} width = '200'></img><br></br>
          
          
        <br></br>
        </Col>
      )}
  
      </Row>
      </Container>
      </div>

      
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
      </div>
    );
    
  }


export default App;
