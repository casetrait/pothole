import { useMapEvent} from 'react-leaflet/hooks'


export default function Mapfunc({setPosition,statePosition}) {
    useMapEvent('click', (e)=>{
        setPosition([e.latlng.lat,e.latlng.lng])
    })

}