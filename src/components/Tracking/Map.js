import React, {useState, useEffect} from 'react'
import {Map, Polyline, Marker, GoogleApiWrapper} from 'google-maps-react';
import {orders} from '../../constants/mock.json'
import { GOOGLE_API_KEY } from '../../constants/googleAPI';

const containerStyle = {
  position: 'relative',  
  width: '70%%',
  height: '350px'
}

function MapContainer({google, partnerId}) {

  /* Marker SVG to add new marker icon */
  const svgMarker = {
    path:
      "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z",
    fillColor: "yellow",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    anchor: new google.maps.Point(0,0)
  };

  /* --- */ 

  let selectedOrder = orders.find(o => o.partnerId == partnerId);
  const [{lat,lng}]= selectedOrder.stops;
  let [currentOrder, setCurrentOrder] = useState(selectedOrder)
  let [initialCenter, setinitialCenter] = useState({lat, lng});

  useEffect(() => {
    const currOrder = orders.find(o => o.partnerId == partnerId);
    const [{lat,lng}]= currOrder.stops;
    setCurrentOrder(currOrder);
    setinitialCenter({lat, lng});
  }, [partnerId])

  return (
    <Map google={google} style={containerStyle} className={'map'} zoom={12} initialCenter={initialCenter} icon= {{svgMarker}}>
      {currentOrder.stops.map((point, i) => {
        return(<Marker position={{lat: point.lat, lng: point.lng}} label={`${i + 1}`} />)
      })}
    <Polyline path={currentOrder.stops} strokeColor="#000" strokeOpacity={0.8} strokeWeight={2} />
  </Map>
  )
}


export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(MapContainer)
