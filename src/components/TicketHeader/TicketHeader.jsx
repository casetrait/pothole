import { useState, useEffect } from 'react'
import '../TicketItems/TicketItems.css'

export default function TicketHeader(props) {
    
    const[conVote, setConVote]=useState()
    const[resVote, setResVote]=useState()
    
    let tallyVotes=async()=> {
        const conVotes = props.ticket.confirmationVote.length
        const resVotes = props.ticket.resolvedVote.length
        setConVote(conVotes)
        setResVote(resVotes)
    }
    const handleOnClick=()=>{
        console.log('clicked!')
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
            {props.user_id===props.ticket.reporter?<button onClick ={handleOnClick}>Edit</button>:null}
        </div>
    );
}