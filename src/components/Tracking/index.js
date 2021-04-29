import React, { useState, useEffect } from 'react'
import MapContainer from './Map'
import { useParams, useLocation } from 'react-router-dom';
import PartnerInfo from '../Partners/Info';
import OrderInfo from '../Oders/Info';
import {isMobile} from 'react-device-detect';
import { partners } from '../../constants/mock.json';

function MainContainer () {
  const { id } = useParams();
  const  [partnerId, setPartnerId] = useState('');
  let location = useLocation();
  let [currentPartner, setCurrentPartner] = useState(partners.find(p => p.id == id))

  useEffect(() => {
    setPartnerId(id);
    let currPartner = partners.find(p => p.id == id);
    setCurrentPartner(currPartner);
  }, [location.pathname])


  if(!partnerId.length){
    return( 'Loading... ')
  }

  const wClasses = "main-contsiner w-82 bg-light ms-auto col-lg-10 pt-4 px-5";
  const mClasses = "main-contsiner w-100 bg-light ms-auto col-lg-10 pt-4 px-2";

  
  return (
    <main role="main" className={isMobile ? mClasses : wClasses}>
      <h6>PARTNER DETAILS</h6>
      <div className="d-flex flex-column mb-3">
        <div className="p-2  border border-grey bg-white">
          <PartnerInfo partner={currentPartner}/>
        </div>
        {partnerId && !!(currentPartner.currentOrderId) ?
        <>
        <div className="container clearfix border border-white d-inline-block p-0 m-0">
          <div className="row map-container my-3" height="300px">
            <MapContainer partnerId={partnerId}/>
          </div>
        </div>
        <div className="py-2 my-2 border border-white">
          <OrderInfo partnerId={partnerId}/>
        </div>
        </>
        : ''}
      </div>
    </main>
  )
}

export default MainContainer;