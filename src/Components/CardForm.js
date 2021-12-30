import React from 'react'
import {Col, Card, Row} from 'react-bootstrap'
import Join from './Join'


const CardForm = () => {
    return (
        <div>
            <Card style={{margin: "auto", height: "700px", color : "green" , width: "400px", position : "Center",}}>
        <div style={{ display: "flex" }}>
        
        <Join />

        </div>
        </Card>
        </div>
    )
}

export default CardForm
