import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import Mapfunc from './Mapfunc'
import './Map.css'

export default function Map({setPosition}) {
    return (
    <MapContainer
        center={{ lat: 49.895077, lng: -97.138451 }}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />     
        <Marker position={[49.895077, -97.138451]}></Marker>
        <Mapfunc setPosition={setPosition}/>
          </MapContainer>
    );
}