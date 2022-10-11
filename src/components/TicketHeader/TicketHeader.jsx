import { useState, useEffect } from 'react'
import '../TicketItems/TicketItems.css'
import * as ticketsAPI from '../../utilities/tickets-api';

export default function TicketHeader(props) {
    
    const[conVote, setConVote]=useState()
    const[resVote, setResVote]=useState()
    
    let ticketId = props.ticket._id
    

    let tallyVotes=async()=> {
        const conVotes = props.ticket.confirmationVote.length
        const resVotes = props.ticket.resolvedVote.length
        setConVote(conVotes)
        setResVote(resVotes)
    }

    function handleOnClick(){
        // let body={ticketId}
        let jwt = localStorage.getItem('token')
        let options = {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
            },
            // body: JSON.stringify(body)
        }

        ticketsAPI.deleteOne(ticketId,options)
    }
  

    useEffect( ()=> {
        tallyVotes()
    },[]
    )

    return (
        <div className="ticket-header">
            <h2>Title: {props.ticket.title}</h2> 
            <h3>Category: {props.ticket.category}</h3>
            <h3>Confirmation Votes: {conVote}</h3>
            <h3>Resolved Votes: {resVote}</h3>
            {props.user_id===props.ticket.reporter?<button onClick={handleOnClick}>Delete</button>:null}
        </div>
    );
}