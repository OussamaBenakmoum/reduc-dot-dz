import "./App.css";
import logo from "./logo.svg";
import {
  Nav,
  NavDropdown,
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Paper } from "@material-ui/core";
import map from "lodash/map";
import range from "lodash/range";
import { Col, Card, Row } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import ScrollMenu from "./Components/ScrollMenu";
import Join from "./Components/Join";
import CardForm from "./Components/CardForm";
import FirstPub from "./Components/FirstPub";
import SecondPub from "./Components/SecondPub";
import AddOffre from "./Components/AddOffre";

function App() {
  return (
    <div>
      <NavBar />
      <ScrollMenu />
      <FirstPub />
      <SecondPub />
      {/* <AddOffre /> */}
    </div>
  );
}

export default App;
