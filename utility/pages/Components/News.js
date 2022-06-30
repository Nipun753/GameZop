import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function News() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setData(res.data)
        })


    }, [])
    return (
        <div style={{width:"70%",marginLeft:"100px"}}>
        <Row xs={1} md={3} className="g-4">
      {data.map((sin, idx) => (
        <Col key={idx}>
          <Card>
            
            <Card.Body>
              <Card.Title>{sin.title}</Card.Title>
              <Card.Text>
               {sin.body}.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
         

        </div>
    )
}