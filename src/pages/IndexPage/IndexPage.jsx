import './IndexPage.css'
import { useState, useEffect } from 'react'
import * as ticketsAPI from '../../utilities/tickets-api';
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import TicketList from '../../components/TicketList/TicketList'

//Needs to be refactored into hooks
export default function IndexPage(props) {
    const [statePosition,setPosition]=useState([49.895077,-97.138451])
    const [ticketItems, setTicketItems]=useState([]);
    
    
    let fetchTicketItems=async ()=> {
        const tickets = await ticketsAPI.getAll()
        setTicketItems(tickets)
    }
    
    useEffect( ()=> {
        //load ticketItems 
        fetchTicketItems()
    },[]
    )
    
    return(
        <main className="">
                <NavBar />
                <Map setPosition = {setPosition} statePosition={statePosition}/>
                <Search />
                <TicketList ticketItems={ticketItems}/>
        </main>
    )
    
}