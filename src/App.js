import './App.css';
import logo from './logo.svg'
import {Nav, NavDropdown,Container, Navbar, Form, FormControl, Button} from 'react-bootstrap'
import { Paper } from "@material-ui/core"
import map from "lodash/map"
import range from "lodash/range"
import {Col, Card, Row} from 'react-bootstrap'
import NavBar from './Components/NavBar'
import ScrollMenu from './Components/ScrollMenu';


function App() {
  
  return (
    <div >
      <ScrollMenu/>
      
        {/* <NavBar /> */}
        
  
    </div>
  );
}


export default App;
