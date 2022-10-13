import Map from "../Map/Map";
// import ImageUpload from "../ImageUpload/ImageUpload";
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom';
import {getCurrentLatLng} from '../../utilities/Getloc'
import { useMap } from 'react-leaflet/hooks'
import './TicketForm.css'

export default function TicketForm({ticketItems,reporter}) {    
    const navigate = useNavigate()
    const [statePosition,setPosition]=useState([49.895077,-97.138451])        
    const[form,setForm]=useState({reporter: reporter, title: '',category:'Pothole',description:'',lat:'',long:''})
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
        let jwt = localStorage.getItem('token')
        let options = {
            method: "POST",
            headers:{
                "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify(body)
        }
        await fetch("/api/tickets",options)
        .then(res=>res.json())
        .then(data =>setForm({title: '',category:'',description:'',lat:'',long:''}))
        navigate("/tickets")
        
    }

    let formCheck='exists'
    
    return (
        <div className="all-form">
            <div className="form">
                <h1>Ticket Form</h1>
                <h2>Title:<input name='title' value={form.title} onChange={handleChange}></input></h2>
                <h2>Category:
                    <select name='category' value={form.category} onChange={handleChange}>
                        <option value="Pothole">Pothole</option>
                        <option value="Drainage">Drainage</option>
                        <option value="Pedestrian">Pedestrian</option>
                        <option value="Traffic Light">Traffic Light</option>
                        <option value="Speed Limit">Speed Limit</option>
                        <option value="Snow">Snow</option>
                        <option value="Ice">Ice</option>
                        <option value="Other">Other</option>
                    </select>
                </h2>
                <h2>Description:</h2>
                <textarea name='description' value={form.description} onChange={handleChange} rows="4" cols="50"></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className="form-map">
                <Map setPosition = {setPosition} formCheck={formCheck} statePosition={statePosition} ticketItems={ticketItems}/>
                <p><button onClick={handleUserLoc}>Use Current Location</button>Latitude: <input name='lat' value={statePosition[0]} onChange={handleChange}></input>
                    Longitude<input name='lng' value={statePosition[1]} onChange={handleChange}></input></p>
            </div>
        </div>
    );
}