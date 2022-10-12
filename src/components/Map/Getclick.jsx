import { useMapEvent,useMap} from 'react-leaflet/hooks'


export default function Mapfunc({setPosition,statePosition}) {
    const map = useMap()
    map.flyTo(statePosition,17)
    useMapEvent('click', (e)=>{
        setPosition([e.latlng.lat,e.latlng.lng])
    })

}