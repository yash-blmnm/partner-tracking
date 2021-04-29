import React from 'react'

function StopInfo ({ stop, index }) {

  return (
    <div className="stop-item border border-grey me-sm-3 mb-4 bg-white">
      <div className="container d-flex flex-row flex-wrap ">
        {/* <div className="row"> */}
          <div className="col-sm col-6">
            <p className="mb-half"><small className="v-small text-uppercase">Stop No.</small></p>
            <p className="mb-half"><strong className="strong-light small">{index + 1}</strong></p>
          </div>
          <div className="col-sm col-6">
            <p className="mb-half"><small className="v-small text-uppercase">Lat</small></p>
            <p className="mb-half"><strong className="strong-light small">{parseFloat(stop.lat).toFixed(6)}</strong></p>
          </div>
          <div className="col-sm col-6">
            <p className="mb-half"><small className="v-small text-uppercase">Long</small></p>
            <p className="mb-half"><strong className="strong-light small">{parseFloat(stop.lng).toFixed(6)}</strong></p>
          </div>
          <div className="col-sm col-6">
            <p className="mb-half"><small className="v-small text-uppercase">Time</small></p>
            <p className="mb-half"><strong className="strong-light small">{stop.time}</strong></p>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default StopInfo;