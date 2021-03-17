import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import {Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './home.css'

const Character = () => {
    const [states, setStates] = useState([]);
    const fetchjson = () => {
        fetchJsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any', {
            jsonpCallback: 'jsoncallback',
            timeout: 3000
        }).then(response => {
            return (response.json())
        }).then(function (json) {
            setStates(json.items)
            console.log(json.items)
        })

    };
    useEffect(() => {
        fetchjson();
    }, []);

    console.log(states, "ayo maniis");

    return (
        <div>
            <Row>
            {states?.map((data, idx) => {
                return (

                    <div key={idx}>
                        <Col>
                            <Card 
                            style={{ width: '18rem', height: '75vh', }}
                            className='Card'>
                            <Card.Img variant="top" src={data.media.m} 
                            style={{ width:'17rem', height:'15rem'}} />
                            <Card.Body>
                            <Card.Title style={{width:'15rem', height: '70vh'}}>
                                <p>Title: {data.title}</p>
                                <p>Published: {data.published}</p>
                            </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <Button 
                            href={data.link}
                            style={{
                                backgroundColor: "black",
                                color: " #fde84d",
                                width: "15vw",
                                height: "50px",
                            }}
                            className="Tombol">
                            Details
                            </Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    </div>
            
                )
            })}
            </Row>
        </div>
    )

}
export default Character;