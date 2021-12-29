import React from 'react'
import Containers from './Containers'
import {Col, Card, Row} from 'react-bootstrap'

//I found it important in order to create mulptiple cards, and also for the ordering (i used display: flex)
const ScrollMenu = () => {
    return (
        <div>
            <Card style={{ backgroundColor : "yellow",height: "300px", color : "red" , width: "1270px", position : "Center", margin: "16px"}}>
        <div style={{ display: "flex" }}>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            
        </div>
        </Card>
        </div>
    )
}

export default ScrollMenu
