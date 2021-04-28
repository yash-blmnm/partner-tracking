import React from 'react';
import {useState} from 'react';
import {isMobile} from 'react-device-detect';
import LeftSideModal from './LeftSideModal';
import { Link } from 'react-router-dom';

// import container from 'tailwindcss';
// import 

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-light bg-white fixed-top border-bottom border-grey">
        {isMobile ? 
        <div className="container-md p-1 mx-3">
          <span onClick={handleShow} className="display-inline-block menu-display">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </span>
          <a className="navbar-brand" href="#">
            <img src='./assets/logo.png' width='85px'/>
          </a>
          <Link to="/" type="button" className="btn btn-warning px-2 py-1 call-btn rounded-pill">All Partners</Link>
        </div>
        : 
        <div className="container-fluid p-1 mx-3">
          <a className="navbar-brand" href="#">
            <img src='./assets/logo.png' width='85px'/>
          </a>
          <div className="d-flex align-items-center">
            <span className="fw-light me-4">Logged in as <strong>dev@orocorp.in</strong></span>
            <button type="button" className="btn btn-primary btn-logout px-4 py-1 rounded">Logout</button>            
          </div>
        </div>
        }
      </nav> 
      <LeftSideModal show={show} onModalClose={handleClose} />
    </>
    
  );
}

export default Header;
