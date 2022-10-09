import Map from "../Map/Map";
import ImageUpload from "../ImageUpload/ImageUpload";
import React, { useState } from 'react' // think you can delete "React"
import { format } from "morgan";



export default function TicketForm(props) {
    const [statePosition,setPosition]=useState([49.895077,-97.138451])
    console.log(statePosition)
    
        const[form,setForm]=useState({title: '',category:'',description:'',lat:'',long:''})
        const title=form.title
        const category=form.category
        const description = form.description
        const lat=form.lat
        const long = form.long

        function handleChange(e){
            setForm(prevForm=>{
                return{...prevForm,[e.target.name]:e.target.value}
            })}

    return (
        <div className="">
            <h1>Ticket Form</h1>
            <form>
            <h2>Title:<input name='title' value={form.title} onChange={handleChange}></input></h2>
            <h2>Category:<input name='category' value={form.category} onChange={handleChange}></input></h2>
            <h2>Description:<input name='description' value={form.description} onChange={handleChange}></input></h2>
            <h2>Latitude: <input name='lat' value={statePosition[0]} onChange={handleChange}></input>
            Longitude<input name='lng' value={statePosition[1]} onChange={handleChange}></input></h2>
            
            </form>
            <Map setPosition = {setPosition} statePosition={statePosition}/>
            <ImageUpload />
        </div>
    );
}