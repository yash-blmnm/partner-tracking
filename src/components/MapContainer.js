import React from 'react'
import {Map, Polyline, Marker, GoogleApiWrapper} from 'google-maps-react';
const containerStyle = {
  position: 'relative',  
  width: '70%%',
  height: '350px'
}

function MapContainer(props) {
  // const google = props.google;
  const triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 26.774, lng: -81.190}
  ];
  const svgMarker = {
    path:
      "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z",
    fillColor: "yellow",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2
  };
  return (
    <Map google={props.google} style={containerStyle} className={'map'} zoom={14}>
      {triangleCoords.map((point, i) => {
        return(<Marker position={{lat: point.lat, lng: point.lng}} label={`${i + 1}`} />)
      })}
    <Polyline path={triangleCoords} strokeColor="#000" strokeOpacity={0.8} strokeWeight={2} />
  </Map>
  )
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyDMRJUizOO-P9AV11V5I-d4KpMxbCoGrw0')
})(MapContainer)


{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg> */}