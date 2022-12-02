
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


export default function UserPageHeader({addTrip}) {


  const [showNavRight, setShowNavRight] = useState(false);
  const [tripModal, toggleTripModal] = useState(false);

  const [tripInfo, setTripInfo] = useState({
    name: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const handleChange = (event) => {
    setTripInfo({...tripInfo, [event.target.name]: event.target.value });
  };
  
  const handleSubmit= (event) => {
    event.preventDefault();
    console.log(tripInfo);
    addTrip(tripInfo);
    setTripInfo({ name: "", start_date: "", end_date: "", description: ""});
  };
  
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
      toggleTripModal(!tripModal);
      }
  
      if(tripModal) {
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
            <MDBNavbarItem>
              <MDBNavbarLink href='#' onClick={toggleTrip}>
                Create New Trip
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    {tripModal && (
        <div className="modal">
          <div onClick={toggleTrip} className="overlay"></div>
          <div className="modal-content">
            <h2>Create Trip</h2>
            <form>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Trip Name</label>
                    <div className="col-sm-10">
                        <input type="text" 
                                name="name" 
                                placeholder="tripName"
                                value={tripInfo.name} onChange={handleChange}
                                />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Start Date</label>
                    <div className="col-sm-10">
                        <input type="date" 
                                name="start_date" 
                                placeholder="Start Date"
                                value={tripInfo.start_date} onChange={handleChange}
                                />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">End Date</label>
                    <div className="col-sm-10">
                        <input type="date" 
                                name="end_date" 
                                id="End Date"
                                value={tripInfo.end_date} onChange={handleChange}
                                />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" 
                              name="description" 
                              id="Trip Description"
                              value={tripInfo.description} onChange={handleChange}/>
                              
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Trip</button>
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