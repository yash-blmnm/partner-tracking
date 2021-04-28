import React from 'react'
import MapContainer from './MapContainer'
import { useParams } from 'react-router-dom';


function MainContainer () {
  let { id } = useParams();

  console.log(id);
  return (
    <main role="main" className="bg-light col-md-9 ms-auto col-lg-10 w-82 pt-4 px-5">
      <h6>PARTNER DETAILS</h6>
      <div className="d-flex flex-column mb-3">
        <div className="p-2  border border-grey bg-white">
          <div className="d-flex justify-content-start">
            <div className="ps-2 pe-5 ">
              <p className="mb-half"><small className="v-small text-uppercase">NAME</small></p>
              <p className="mb-half"><strong className="strong-light small">Kannan S</strong></p>
            </div>
            <div className="ps-2 pe-5">
              <p className="mb-half"><small className="v-small text-uppercase">PARTNER ID</small></p>
              <p className="mb-half"><strong className="strong-light small">OMA00005</strong></p>
            </div>
            <div className="ps-2 pe-5 ">
              <p className="mb-half"><small className="v-small text-uppercase">Mobile Number</small></p>
              <p className="mb-half"><strong className="strong-light small">9988776655</strong></p>
            </div>
            <div className="ps-2 pe-5 ">
              <p className="mb-half"><small className="v-small text-uppercase">status</small></p>
              <p className="mb-half">
                <span className="status-round rounded-circle px-1 bg-dark me-2"></span>
                <strong className="strong-light small">OMV00033</strong>
              </p>
            </div>
            <div className="p-3 ms-auto">
              <button type="button" className="btn btn-warning px-2 py-1 call-btn rounded-pill">Call Partner</button>
            </div>
          </div>
          {/* <div className="d-flex"> */}
            
          {/* </div> */}

        </div>
        <div className=" container clearfix border border-white d-inline-block p-0 m-0">
          <div className="row map-container my-3" height="300px">
            <MapContainer />
          </div>
        </div>
        <div className="py-2 my-2 border border-white">
          <div className="container p-0">
            <div className="row">
              <div className="col-sm  border border-grey me-4 mb-4 bg-white">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Stop No.</small></p>
                      <p className="mb-half"><strong className="strong-light small">1</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Lat</small></p>
                      <p className="mb-half"><strong className="strong-light small">13.0565342</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Long</small></p>
                      <p className="mb-half"><strong className="strong-light small">80.965426</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Time</small></p>
                      <p className="mb-half"><strong className="strong-light small">01:35 PM</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm   border border-grey me-4 mb-4 bg-white">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Stop No.</small></p>
                      <p className="mb-half"><strong className="strong-light small">2</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Lat</small></p>
                      <p className="mb-half"><strong className="strong-light small">13.0565342</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Long</small></p>
                      <p className="mb-half"><strong className="strong-light small">80.965426</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Time</small></p>
                      <p className="mb-half"><strong className="strong-light small">01:55 PM</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm border border-grey me-4 mb-4 bg-white">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Stop No.</small></p>
                      <p className="mb-half"><strong className="strong-light small">1</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Lat</small></p>
                      <p className="mb-half"><strong className="strong-light small">13.0565342</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Long</small></p>
                      <p className="mb-half"><strong className="strong-light small">80.965426</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Time</small></p>
                      <p className="mb-half"><strong className="strong-light small">01:35 PM</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm border border-grey me-4 mb-4 bg-white">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Stop No.</small></p>
                      <p className="mb-half"><strong className="strong-light small">1</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Lat</small></p>
                      <p className="mb-half"><strong className="strong-light small">13.0565342</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Long</small></p>
                      <p className="mb-half"><strong className="strong-light small">80.965426</strong></p>
                    </div>
                    <div className="col-sm">
                      <p className="mb-half"><small className="v-small text-uppercase">Time</small></p>
                      <p className="mb-half"><strong className="strong-light small">01:35 PM</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    // <MapContainer />
  )
}

export default MainContainer;