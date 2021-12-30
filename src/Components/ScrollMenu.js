import React from 'react'
import logo from './../logo.svg'

//import Containers from './Containers'
import {Col, Card, Row} from 'react-bootstrap'

//I found it important in order to create mulptiple cards, and also for the ordering (i used display: flex)
const Containers = () => {
    return (
        <div >
            
            <Card style={{ height: "230px", width: "230px", margin: "16px",marginTop:"10px"  }}>
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
const ScrollMenu = () => {
    let items=[Containers,Containers,Containers,Containers,Containers,Containers,Containers];
let itemList=[];
items.forEach((item,index)=>{
  itemList.push(item)
})
    return (
        <div>
            <h1 style={{ margin: "auto",textAlign: 'center',marginTop:"10px", }}>Découvrez nos meilleurs offres sur notre site</h1>
            <Card style={{marginTop:"10px", margin: "auto", height: "300px", color : "green" , width: "1270px", position : "Center", overflowX:"scroll"}}>
        <div style={{ display: "flex" }}>
        
            {/* <Containers/>
            <C
            <Containers/> */}
            {items.map((item,index)=>{
         return <Containers/>
     })}
        </div>
        </Card>
        </div>
    )
}
export default ScrollMenu
