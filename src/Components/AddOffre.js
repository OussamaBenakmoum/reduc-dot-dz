import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import logo from "./../logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
//AiOutlinePlusCircle
const AddOffre = () => {
  return (
    <div>
      <Card
        style={{
          textAlign: "center",
          height: "230px",
          width: "230px",
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

export default AddOffre;
