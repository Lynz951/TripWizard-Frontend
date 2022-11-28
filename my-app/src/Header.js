
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import './App.css'
import logo from './logo.png'
import desktopImage from './Travellersonvanwithwords.png'
import mobileImage from './mobileImage.png'



export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <img src={logo} alt="Logo" className="logo"/>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        id='intro-example'
        className='p-5 text-center bg-image' style={{backgroundImage: `url(${imageUrl})` }}>
      
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              {/* <h1 className='mb-3'>Trip Wizard</h1> */}
              <h5 className='mb-4'>The <b>best</b> way to organize <br /> and share group trip plans!</h5>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href='https://www.youtube.com/watch?v=c9B4TPnak1A'
              >
                Learn More
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href='https://mdbootstrap.com/docs/standard/'
              >
                Create Account
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href='https://mdbootstrap.com/docs/standard/'
              >
                Sign In
              </MDBBtn>
            </div>
          </div>
        
      </div>
    </header>
  );
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

