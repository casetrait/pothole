import './IndexPage.css'
import { useState, useEffect } from 'react'
import * as ticketsAPI from '../../utilities/tickets-api'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import TicketList from '../../components/TicketList/TicketList'


export default function IndexPage({user}) {
    const [statePosition,setPosition] = useState([49.895077,-97.138451])
    const [ticketItems, setTicketItems] = useState([])
    
    let fetchTicketItems = async () => {
        const tickets = await ticketsAPI.getAll()
        setTicketItems(tickets)
    }

    let handleOnClickDelete=(ticketId)=>{
        let jwt = localStorage.getItem('token')
        let options = {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
            }
        }
        ticketsAPI.deleteOne(ticketId,options)
    }
   
    useEffect( ()=> {
        fetchTicketItems()
    },[]
    )
    
    return(
        <main className="">
                <NavBar />
                <div className="index-map-search">
                <Search />
                <Map className="index-map" setPosition = {setPosition} statePosition={statePosition} ticketItems={ticketItems}/>
                </div>
                <h1 className='ticklist-header'>Route Tickets:</h1>
                <TicketList 
                    ticketItems={ticketItems} 
                    user={user} 
                    handleOnClickDelete={handleOnClickDelete}
                    fetchTicketItems={fetchTicketItems}
                />
        </main>
    )
    
}