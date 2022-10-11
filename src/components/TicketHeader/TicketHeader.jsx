import { useState, useEffect } from 'react'
import '../TicketItems/TicketItems.css'
import * as ticketsAPI from '../../utilities/tickets-api';

export default function TicketHeader({ticket,handleOnClickDelete,user_id}) {
    
    const[conVote, setConVote]=useState()
    const[resVote, setResVote]=useState()
    
    let ticketId = ticket._id
    

    let tallyVotes=async()=> {
        const conVotes = ticket.confirmationVote.length
        const resVotes = ticket.resolvedVote.length
        setConVote(conVotes)
        setResVote(resVotes)
    }

   
    // function handleOnClick(){
    //     // let body={ticketId}
    //     let jwt = localStorage.getItem('token')
    //     let options = {
    //         method:"DELETE",
    //         headers:{
    //             "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
    //         },
    //         // body: JSON.stringify(body)
    //     }

    //     ticketsAPI.deleteOne(ticketId,options)
    // }
  

    useEffect( ()=> {
        tallyVotes()
    },[]
    )

    return (
        <div className="ticket-header">
            <h2>Title: {ticket.title}</h2> 
            <h3>Category: {ticket.category}</h3>
            <h3>Confirmation Votes: {conVote}</h3>
            <h3>Resolved Votes: {resVote}</h3>
            {user_id===ticket.reporter?<button onClick={()=>handleOnClickDelete(ticketId)}>Delete</button>:null}
        </div>
    );
}