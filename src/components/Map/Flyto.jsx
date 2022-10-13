import { useMapEvent,useMap} from 'react-leaflet/hooks'


export default function Mapfunc({position}) {
    console.log()

    const map = useMap()
    map.flyTo(position,15)}
    
    
