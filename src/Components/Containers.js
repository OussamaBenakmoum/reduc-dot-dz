import React from 'react'
import {Col, Card, Row} from 'react-bootstrap'
import logo from './../logo.svg'
const Containers = () => {
    return (
        <div >
            <Card style={{ height: "230px", width: "230px", margin: "16px" }}>
    <Card.Img variant="top" height={43} width={60}  src={logo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card> 
        </div>
    )
}

export default Containers
