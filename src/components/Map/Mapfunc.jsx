import React from 'react'
import { useMapEvents} from 'react-leaflet/hooks'
import L from "leaflet";

export default function Mapfunc({setPosition}) {
    let marker
    const map = useMapEvents({click: (e)=>{
      if(marker){
          let position=[]
        //   setPosition(prevposition=>position)   
          map.removeLayer(marker)
        position=[e.latlng.lat,e.latlng.lng]
        // console.log(position)
        marker=L.marker(position,{draggable:true}).addTo(map)
        // setPosition(prevposition=>position)        
      }else{
        const position=[e.latlng.lat,e.latlng.lng]
        marker=L.marker(position,{draggable:true}).addTo(map)
        // setPosition(prevposition=> position)  
    }
    }})
}