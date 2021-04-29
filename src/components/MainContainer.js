import React, { useState, useEffect } from 'react'
import MapContainer from './MapContainer'
import { useParams, useLocation } from 'react-router-dom';
import PartnerDetails from './PartnerDetails';
import OrderDetails from './OrderDetails';
import {isMobile} from 'react-device-detect';
import { partners } from '../constants/mock.json';

const statusMap = {
  0: 'inactive',
  1: 'active',
  2: 'visit',
  3: 'idle'
}


function MainContainer () {
  const { id } = useParams();
  const  [partnerId, setPartnerId] = useState('');
  let location = useLocation();
  let [currentPartner, setCurrentPartner] = useState(partners.find(p => p.id == id))

  useEffect(() => {
    setPartnerId(id);
    console.log(id);
    let currPartner = partners.find(p => p.id == id);
    console.log(currPartner);
    setCurrentPartner(currPartner);
  }, [location.pathname])


  if(!partnerId.length){
    console.log('loading')
    return( 'Loading... ')
  }

  const wClasses = "main-contsiner w-82 bg-light ms-auto col-lg-10 pt-4 px-5";
  const mClasses = "main-contsiner w-100 bg-light ms-auto col-lg-10 pt-4 px-2";

  
  return (
    <main role="main" className={isMobile ? mClasses : wClasses}>
      <h6>PARTNER DETAILS</h6>
      <div className="d-flex flex-column mb-3">
        <div className="p-2  border border-grey bg-white">
          <PartnerDetails partner={currentPartner}/>
        </div>
        {partnerId && !!(currentPartner.currentOrderId) ?
        <>
        <div className="container clearfix border border-white d-inline-block p-0 m-0">
          <div className="row map-container my-3" height="300px">
            <MapContainer partnerId={partnerId}/>
          </div>
        </div>
        <div className="py-2 my-2 border border-white">
          <OrderDetails partnerId={partnerId}/>
        </div>
        </>
        : ''}
      </div>
    </main>
  )
}

export default MainContainer;