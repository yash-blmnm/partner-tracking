import React from 'react'
import MainContainer from './MainContainer';
import ListPartners from './Partners/ListPartners'
import { Route, Switch} from "react-router-dom";
import {partners, partnerDetails} from '../constants/routes';


function MobileView () {

  return (
    <div className="container-md main-offset bg-light py-3"> 
      {/* <ListPartners /> */}
      <Switch>
        {/* display logic for sm devices */}
        <Route exact path={partners}>
          <ListPartners />
        </Route>
        <Route path={partnerDetails}>
          <MainContainer />
        </Route>
      </Switch>
    </div>
  )
}


export default MobileView;