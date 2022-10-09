import { useMapEvent} from 'react-leaflet/hooks'


export default function Mapfunc({setPosition,statePosition}) {
   
       
    const map = useMapEvent('click', (e)=>{
        setPosition([e.latlng.lat,e.latlng.lng])
    })


    // const map = useMapEvent('click', (e)=>{
  
        

    //     if(!marker){
    //         marker=L.marker([e.latlng.lat,e.latlng.lng]).addTo(map)
    //         position=[e.latlng.lat,e.latlng.lng]
    //         // setPosition(position)
    //         console.log(position , 'if')
            
    //     }
    //     else{
    //         map.removeLayer(marker)
    //         marker=L.marker([e.latlng.lat,e.latlng.lng]).addTo(map)
    //         position=[e.latlng.lat,e.latlng.lng]
    //         // setPosition(position)
    //         console.log(position, 'else')          
            
    //     }
        
    //     setPosition(position)
    // })
}