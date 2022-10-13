import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import Getclick from './Getclick'
import Flyto from './Flyto'

import './Map.css'
import {iconSelect} from '../../utilities/iconSelector'


export default  function Map({setPosition,statePosition,ticketItems,formCheck,handleMarkerClickSearch}) {
   
   
   

    return (
        
    <MapContainer
        center={[49.895077,-97.138451]}
        zoom={13}
        scrollWheelZoom={true}
        >
          
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
     
       <MarkerClusterGroup>
        {ticketItems.map(ticket=>
        <Marker key = {ticket._id}
        position={[ticket.lat, ticket.long]}
        icon = {iconSelect(ticket.category)} 
        eventHandlers={{
          click: () => {handleMarkerClickSearch(ticket._id,ticket.lat,ticket.long)}
        }}
        >
        <Flyto position={statePosition}/> 
        {/* [ticket.lat, ticket.long] */}
          <Popup >
            <b>{ticket.category}</b> <br/>
            {ticket.title}
          </Popup>
          </Marker>)}
          </MarkerClusterGroup>
        {/* This is to make Sure get click and selection marker only works on form page*/}
        {formCheck? 
        <Getclick setPosition={setPosition} statePosition={statePosition}/>
        : null}
               
        {formCheck? <Marker position={statePosition} ></Marker>: null}

          
        </MapContainer>

    );
}