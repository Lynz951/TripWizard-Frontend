import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function About() {
    
        return (
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>About Trip Wizard</MDBCardTitle>
              <MDBCardText>
                <div className='textIndent1'>
                Trip Wizard was born when developer, Lindsay Haddix, had a major problem. <br />
                </div>
                <div className='textIndent2'>
                While planning a 10-day European vacation for 12 people (yes 12!) Lindsay had a terrible time. No one ever knew what was going on and they were constantly asking her what the plans were. All she wanted was a place to keep, see, share, and update plans easily.   
                </div>  
                <div className='textIndent3'>
                TripWizard is a place where a group travelling together can store their plans easily. Plans include flights, hotel reservations, activities, and just about anything else you can come up with! They can then view their itinerary in an easy to read and understand format. Sharing your plans and itinerary with group members is fast and can be done with the push of a button! Once you have created a profile you can create a trip and add plans to it throughout your planning process. Trips are saved even after you've taken them so that all of your plans are available forever. We hope this makes planning your group trip super easy and you are encouraged to do more!
                </div>
              </MDBCardText>
              <MDBBtn>Join Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        );
      }