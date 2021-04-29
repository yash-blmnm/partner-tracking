import React from 'react';
import {isMobile} from 'react-device-detect';


const statusMap = {
  0: 'inactive',
  1: 'active',
  2: 'visit',
  3: 'idle'
}


function PartnerDetails ({ partner }) {

  const cwClasses = "p-3 ms-auto";
  const cmClasses = "cp-wrapper mx-auto position-relative";

  return (
    <div className=" container d-flex flex-row flex-wrap justify-content-start">
      <div className="col-sm-2 col-6 ">
        <p className="mb-half"><small className="v-small text-uppercase">NAME</small></p>
        <p className="mb-half"><strong className="strong-light small">{partner.name}</strong></p>
      </div>
      <div className="col-sm-2 col-6">
        <p className="mb-half"><small className="v-small text-uppercase">PARTNER ID</small></p>
        <p className="mb-half"><strong className="strong-light small">{partner.id}</strong></p>
      </div>
      <div className="col-sm-2 col-6 ">
        <p className="mb-half"><small className="v-small text-uppercase">Mobile Number</small></p>
        <p className="mb-half"><strong className="strong-light small">{partner.phone}</strong></p>
      </div>
      <div className="col-sm-2 col-6 ">
        <p className="mb-half"><small className="v-small text-uppercase">status</small></p>
        <p className="mb-half">
          <span className={`status-round rounded-circle px-1 bg-${statusMap[partner.status]} me-2`}></span>
          <strong className="strong-light small">{partner.currentOrderId}</strong>
        </p>
      </div>
      <div className={isMobile ? cmClasses : cwClasses}>
        <button type="button" className="btn btn-warning px-2 py-1 call-btn rounded-pill">Call Partner</button>
      </div>
    </div>
  )
}

export default PartnerDetails;