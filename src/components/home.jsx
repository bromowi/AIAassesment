import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import { camelizeKeys } from 'humps';


const Character = () => {
    const [states, setStates] = useState([]);
    const getData = async () => {
        let result = await fetchjson();
        console.log(result)
    };

    const fetchjson = () => {
        fetchJsonp( 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any', {
            jsonpCallback: 'jsoncallback',
            
          }).then(response => { 
              return response.json()
        })

    };

    const camelizeJSON = json =>
    camelizeKeys(json, (key, convert) => {
      return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
    });

    useEffect(() => {
        getData();
    }, []);

    console.log(states, "ayo maniis");

    return (
        <div>
            {states?.map((data, idx) => {
                return (
                    <div key={idx}>                          
                        <div>
                            <img src= {data.picture.medium} width='200'/>
                            <p>Name: {data.name.first} {data.name.last}</p>
                            <p>Realease: {data.nat} </p>
                            <br />
                            <br />
                        </div>
                    </div>
                )
            })}
        </div>
    )

        }
export default Character;