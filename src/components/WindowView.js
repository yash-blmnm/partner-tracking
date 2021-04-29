import React from 'react'
import Tracking from './Tracking';
import {partnerDetails} from  '../constants/routes';
import Sider from './Sider';
import { Route } from 'react-router-dom';


function WindowView () {
  return (
    <div className="container-fluid main-offset">
      <div className="row">
        <Sider />
        test
        <Route path={partnerDetails}>
          fuck
          <Tracking />
        </Route>
      </div>
    </div>
  )
}


export default WindowView