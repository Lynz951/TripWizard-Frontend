
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
  // MDBBtn,
} from 'mdb-react-ui-kit';
import './App.css'
import logo from './logo.png'
import { XCircleFill } from 'react-bootstrap-icons'
import desktopImage from './Travellersonvanwithwords.png'
import mobileImage from './mobileImage.png'
import 'bootstrap/dist/css/bootstrap.css'


export default function Header() {

  const [showNavRight, setShowNavRight] = useState(false);
  const [login, setLogin] = useState(false);
  const [trip, setTrip] = useState(false);
  const imageUrl = useWindowWidth() >= 715 ? desktopImage : mobileImage;

  function toggleLogin() {
    setLogin(!login);
    }

    if(login) {
      document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal') 
    }

  function toggleTrip() {
    setTrip(!trip);
    }

    if(trip) {
      document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal') 
    }


  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarLink aria-current='page' href='#'>
          <img src={logo} alt="Logo" className="logo"/>
        </MDBNavbarLink>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
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
              <MDBNavbarLink href='#' onClick={toggleLogin}>
                Login
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' onClick={toggleTrip}>
                Create Trip
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

      {login && (
        <div className="modal">
          <div onClick={toggleLogin} className="overlay"></div>
          <div className="modal-content">
            <h2>Log In</h2>
            <form>
                <div className="row mb-3">
                    <label htmlFor="loginEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="loginEmail"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="loginPW" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="loginPW"/>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <h2 className="close-modal" onClick={toggleLogin}>
            <XCircleFill></XCircleFill>
            </h2>
          </div>
        </div>
      )}

      {trip && (
        <div className="modal">
          <div onClick={toggleLogin} className="overlay"></div>
          <div className="modal-content">
            <h2>Create Trip</h2>
            <form>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Trip Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="tripName"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Start Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="startDate"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">End Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="endDate"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="tripDescription"/>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Save Trip</button>
            </form>
            <h2 className="close-modal" onClick={toggleTrip}>
            <XCircleFill></XCircleFill>
            </h2>
          </div>
        </div>
      )}

      
{/* IMAGE */}
      <div
        id='intro-example'
        className='p-5 text-center bg-image' style={{backgroundImage: `url(${imageUrl})` }}>
      
          {/* <div className='d-flex justify-content-center align-items-center h-100'>
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
                Join Trip Wizard
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
          </div> */}
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

