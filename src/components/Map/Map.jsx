import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import Getclick from './Getclick'
import './Map.css'




export default  function Map({setPosition,statePosition}) {
    return (
        
    <MapContainer
        center={statePosition}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />     
        
        <Getclick setPosition={setPosition} statePosition={statePosition}/>
        <Marker position={statePosition}></Marker>
        </MapContainer>

    );
}