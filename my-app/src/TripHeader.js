
import React, { useState, useEffect } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css"
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import './App.css'
import logowithwords from './TWLogo.png'
import { XCircleFill } from 'react-bootstrap-icons'
import desktopImage from './Travellersonvanwithwords.png'
import mobileImage from './mobileImage.png'
import 'bootstrap/dist/css/bootstrap.css'


export default function UserPageHeader() {

  const [showNavRight, setShowNavRight] = useState(false);
  const imageUrl = useWindowWidth() >= 715 ? desktopImage : mobileImage;

//   Change to logout
//   function toggleLogin() {
//     setLogin(!login);
//     }

//     if(login) {
//       document.body.classList.add('active-modal')
//     } else {
//         document.body.classList.remove('active-modal') 
//     }


  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarLink aria-current='page' href='#'>
          <img src={logowithwords} alt="Logo" className="logo"/>
        </MDBNavbarLink>

        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                My Trips
              </MDBNavbarLink>
            </MDBNavbarItem>

    {/* Change to logout */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='#' onClick={toggleLogin}>
                Login
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
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