import Map from "../Map/Map";
import ImageUpload from "../ImageUpload/ImageUpload";
import React, { useState,useEffect } from 'react'
import { format } from "morgan";
import {getCurrentLatLng} from '../../utilities/Getloc'




export default function TicketForm(props) {    
    
    const [statePosition,setPosition]=useState([49.895077,-97.138451])
    console.log(statePosition)
        
    const[form,setForm]=useState({title: '',category:'',description:'',lat:'',long:''})
    const title=form.title
    const category=form.category
    const description = form.description
    const lat=statePosition[0]
    const long = statePosition[1]
    

    let handleUserLoc = async () =>{
        let userlatlng= await getCurrentLatLng()
        let currloc=[userlatlng.lat,userlatlng.lng]
        setPosition(currloc)
    }
    let handleChange=(e)=>{
        setForm(prevForm=>{
            return{...prevForm,[e.target.name]:e.target.value}
        }
        )
    }
        
    let handleSubmit = async ()=>{
        let body = {...form,lat:statePosition[0],long:statePosition[1]}
        let options = {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch("/api",options)
        .then(res=>res.json())
        .then(data =>form.setForm({title: '',category:'',description:'',lat:'',long:''}))
        console.log(body)
    }
    
        
    

    return (
        <div className="">
            <h1>Ticket Form</h1>
            
            <h2>Title:<input name='title' value={form.title} onChange={handleChange}></input></h2>
            <h2>Category:<select name='category' value={form.category} onChange={handleChange}>
            <option value="Pothole">Pothole</option>
            <option value="Drainage">Drainage</option>
            <option value="Pedestrian">Pedestrian</option>
            <option value="Traffic Light">Traffic Light</option>
            <option value="Speed Limit">Speed Limit</option>
            <option value="Snow">Snow</option>
            <option value="Ice">Ice</option>
            </select>
            </h2>
            <h2>Description:<textarea name='description' value={form.description} onChange={handleChange} rows="4" cols="50"></textarea></h2>
            <p><button onClick={handleUserLoc}>Use Current Location</button>Latitude: <input name='lat' value={statePosition[0]} onChange={handleChange}></input>
            Longitude<input name='lng' value={statePosition[1]} onChange={handleChange}></input></p>
           
            <Map setPosition = {setPosition} statePosition={statePosition}/>
            
            <ImageUpload />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}