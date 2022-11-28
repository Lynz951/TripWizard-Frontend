
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
  const imageUrl = useWindowWidth() >= 715 ? desktopImage : mobileImage;

  return (
    <header>
     <MDBNavbar expand='lg' light bgColor='white'>
     <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                <img src={logo} alt="Logo" className="logo"/>
                </MDBNavbarLink>
              </MDBNavbarItem>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='justify-content-end mb-20 mb-lg-0'>
             
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Support</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Join</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Members</MDBNavbarLink>
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

