import './IndexPage.css'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import TicketList from '../../components/TicketList/TicketList'

//Needs to be refactored into hooks
export default function IndexPage(props) {
    const [statePosition,setPosition]=useState([49.895077,-97.138451])


    return(
        <main className="">
                <NavBar />
                <h1>Index Page</h1>
                <Search />
                <Map setPosition = {setPosition} statePosition={statePosition}/>
                <TicketList />
        </main>
    )
    
}