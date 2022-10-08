import Map from "../Map/Map";
import ImageUpload from "../ImageUpload/ImageUpload";
import React, { useState } from 'react'

export default function TicketForm(props) {
    const [position,setPostion]=useState([])
    return (
        <div className="">
            <h1>Ticket Form</h1>
            <Map setPosition = {setPostion}/>
            <ImageUpload />
        </div>
    );
}