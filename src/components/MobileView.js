import React from 'react'
import Tracking from './Tracking';
import Partners from './Partners'
import { Route, Switch} from "react-router-dom";
import {partners, partnerDetails} from '../constants/routes';


function MobileView () {

  return (
    <div className="container-md main-offset bg-light py-3"> 
      <Switch>
        {/* display logic for sm devices */}
        <Route exact path={partners}>
          <Partners />
        </Route>
        <Route path={partnerDetails}>
          <Tracking />
        </Route>
      </Switch>
    </div>
  )
}


export default MobileView;