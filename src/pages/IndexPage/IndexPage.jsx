import './IndexPage.css'
import { useState, useEffect } from 'react'
import * as ticketsAPI from '../../utilities/tickets-api';
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import TicketList from '../../components/TicketList/TicketList'


export default function IndexPage({user,handleLogout}) {
    const [statePosition,setPosition]=useState([49.895077,-97.138451])
    const [ticketItems, setTicketItems]=useState([]);
    
    
    let fetchTicketItems = async () => {
        const tickets = await ticketsAPI.getAll()
        setTicketItems(tickets)
    }
    let handleOnClickDelete=(ticketId)=>{
        // let body={ticketId}
        let jwt = localStorage.getItem('token')
        let options = {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
            },
            // body: JSON.stringify(body)
        }

        ticketsAPI.deleteOne(ticketId,options).then(fetchTicketItems())
    }
    let handleYourTickets= async (userid)=>{
        // console.log('clicked!')
        const yourTickets = await ticketsAPI.getYourTickets(userid)
        console.log(yourTickets)
        setTicketItems(yourTickets)
    }
    
    useEffect( ()=> {
        //load ticketItems 
        fetchTicketItems()
    },[]
    )

    // useEffect( ()=> {
    //     //load ticketItems 
    //     },[ticketItems]
    // )
    
    return(
        <main className="">
                <NavBar handleLogout = {handleLogout}/>
                <div className="index-map-search">
                <Search 
                handleYourTickets={handleYourTickets} 
                user={user}
                />
                <Map className="index-map" setPosition = {setPosition} statePosition={statePosition} ticketItems={ticketItems}/>
                </div>
                <h1 className='ticklist-header'>Route Tickets:</h1>
                <TicketList ticketItems={ticketItems} user={user} handleOnClickDelete={handleOnClickDelete}/>
        </main>
    )
    
}