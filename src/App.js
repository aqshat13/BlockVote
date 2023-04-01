import 'regenerator-runtime/runtime'
import React ,{useState} from 'react'
import { login, logout } from './utils'
import './global.css'
import Container from 'react-bootstrap';
import Subjects from '../src/component/Subjects.js'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row,Col} from 'react-bootstrap'
import Candidate  from '../src/component/Candidate';
import getConfig from './config'
import Bjp from './assets/bjp.png';
import Congress from './assets/congress.png'

const { networkId } = getConfig(process.env.NODE_ENV || 'development')



export default function App() {

 const[buttonState,ChangeButtonState]=useState(false);

 const modButton=()=>{
   ChangeButtonState(
    !buttonState
   )
 }

let bjpdescription="Current ruling party";
let CongressDescription="Ruled for many years"


 return(
 <React.Fragment>
  <div>
  <Navbar className="Navbar-Background"   bg="dark" collapseOnSelect expand="lg" variant="dark">
   <Navbar.Brand href="#home">BlockVote</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
       </Nav>
       <Nav>
        <Nav.Link onClick={(window.accountId==='')?login:logout} eventKey={2}>
          {(window.accountId==='')?"Login":window.accountId}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
   </Navbar>
  </div> 

  <div className="container">
    <Row>
     <div className="col-sm d-flex justify-content-center">  <Col> <Candidate modButton={modButton} buttonState={buttonState} picture={Bjp} description={bjpdescription} title={"BJP"}/></Col></div>
     <div className="col-sm d-flex justify-content-center">  <Col><Subjects/></Col></div>
     <div className="col-sm d-flex justify-content-center">  <Col> <Candidate modButton={modButton} buttonState={buttonState} picture={Congress} title={"CONGRESS"} description={CongressDescription}/></Col></div>
    </Row>  
  </div>

</React.Fragment>
)
}
