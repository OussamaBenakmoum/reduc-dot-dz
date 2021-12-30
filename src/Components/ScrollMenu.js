import React from "react";
import logo from "./shirt.jpg";
import photomarket from "./jumia.jpg";
//import Containers from './Containers'
import { Col, Card, Row } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

//FaShare
//I found it important in order to create mulptiple cards, and also for the ordering (i used display: flex)

const AddOffre = () => {
  return (
    <div>
      <Card
        style={{
          textAlign: "center",
          borderRadius: "15px",
          height: "230px",
          width: "230px",
          color: "#009791",
          margin: "16px",
        }}
      >
        <Card.Body>
          <Card.Text>
            <AiOutlinePlus size={150} />
          </Card.Text>
          <Card.Title>Ajouter un offre</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

const Containers = () => {
  return (
    <div>
      <Card
        style={{
          borderRadius: "15px",
          height: "235px",
          width: "230px",
          margin: "16px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Card.Img variant="top" height={90} width={10} src={logo} />
        </div>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>T-shirt</Card.Title>
          <Card.Text style={{ display: "flex", margin: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card.Img
                style={{ maxWidth: "70px", float: "left" }}
                src={photomarket}
              />
              <div>
                <div style={{ color: "#FFAA05", fontWeight: "bold" }}>
                  1,900 DZD
                </div>
                <div
                  style={{ textDecoration: "line-through", color: "#909090" }}
                >
                  2,400 DA
                </div>
              </div>
              <FaShare style={{ color: "#009791" }} />
              <AiOutlineHeart style={{ color: "#009791" }} />
            </div>
          </Card.Text>
        </Card.Body>
        <div>
          <p style={{ color: "black" }}>
            {" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              Expiration :
            </span>{" "}
            21/12/2021
          </p>
        </div>
      </Card>
    </div>
  );
};
const ScrollMenu = () => {
  let items = [true, false, true, false, true, false, true, false];
  let itemList = [];
  items.forEach((item, index) => {
    itemList.push(item);
  });
  return (
    <div>
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "10px",
          color: "black",
        }}
      >
        Découvrez nos meilleurs offres sur notre site
      </h1>
      <Card
        style={{
          marginTop: "10px",
          margin: "auto",
          height: "290px",
          color: "green",
          width: "1270px",
          position: "Center",
          overflowX: "scroll",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* <Containers/>
            <C
            <Containers/> */}
          {items.map((item, index) => {
            if (index == 0) {
              return <AddOffre />;
            } else {
              return <Containers />;
            }
            //return <Containers />;
          })}
        </div>
      </Card>
    </div>
  );
};
export default ScrollMenu;
