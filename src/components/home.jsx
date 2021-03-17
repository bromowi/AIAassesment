import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
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

    // console.log(states, "ayo maniis");

    return (
        <div>
            {states?.map((data, idx) => {
                return (
                    <div key={idx}>
                        <div>
                            <Card style={{ width: "20rem", height: "20rem" }}>
                                <CardImg src={data.media.m} className='Gambar' />
                                <CardBody>
                                    <CardTitle tag="h5">{data.author}</CardTitle>
                                    {/* <CardText>Description: {data.description}.</CardText> */}
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}
export default Character;