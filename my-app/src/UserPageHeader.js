
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
  const [login, setLogin] = useState(false);
  const [trip, setTrip] = useState(false);
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
          <img src={logowithwords} alt="Logo" className="logo"/>
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

    {/* Change to logout */}
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='#' onClick={toggleLogin}>
                Login
              </MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem>
              <MDBNavbarLink href='#' onClick={toggleTrip}>
                Create New Trip
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