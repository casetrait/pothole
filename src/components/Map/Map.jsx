import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Getclick from './Getclick'
import './Map.css'
import {iconSelect} from '../../utilities/iconSelector'



export default  function Map({setPosition,statePosition,ticketItems,formCheck}) {
  
    return (
        
    <MapContainer
        center={statePosition}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />     
        {formCheck? <Getclick setPosition={setPosition} statePosition={statePosition}/>: null}
               
        {formCheck? <Marker position={statePosition} ></Marker>: null}
        
        {ticketItems.map(ticket=>
        <Marker key = {ticket._id} position={[ticket.lat, ticket.long]} icon = {iconSelect(ticket.category)}>
          <Popup>
            {ticket.category} <br/>
            {ticket.title}
          </Popup>
          </Marker>)}
          
        </MapContainer>

    );
}