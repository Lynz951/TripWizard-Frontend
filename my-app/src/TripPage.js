
import './App.css'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sunsetLA from './sunsetLA.jpg';


export default function TripPage() {

    const [data, setData] = useState([])
  
    useEffect(() => {
        axios.get('https://8000-lynz951-tripwizardbacke-gwc815o36p3.ws-us77.gitpod.io/api/trip/')
            .then((response) => {
                setData(response.data);
             });
    }, []);
    
        console.log(data)
        if(data.length === 0) {
            return null
        }

        const Trip = data.map(trip => 
            (
            <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div><h1>{trip.name}</h1>
                        </div>
            </div>
            <div className='tripcard' style={{display: 'flex', justifyContent: 'center'}}>
                {/* <button><img  id='tripbutton1' src={tripbutton1} alt="my image" onClick={myfunciton}></img></button> */}
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={sunsetLA} />
                    <Card.Body>
                        <Card.Title>{trip.name}</Card.Title>
                        <Card.Text>
                            <h6>Start Date:{trip.start_date}</h6>
                            <h6>End Date:{trip.end_date}</h6>
                            {trip.description}
                        </Card.Text>
                        <Button variant="primary">Edit Trip</Button>
                        <Button variant="primary">Delete Trip</Button>
                        <Button variant="primary">Share Trip</Button>
                    </Card.Body>
                </Card>
            </div>  
            </>    
            )
        )

    return(
        <>
        {Trip}
        </>
    )
}