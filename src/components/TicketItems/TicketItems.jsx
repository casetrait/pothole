import { useState, useEffect } from 'react'
import * as VoteAPI from '../../utilities/votes-api'
import TicketHeader from "../TicketHeader/TicketHeader";
import TicketDetails from "../TicketDetails/TicketDetails";
import '../TicketList/TicketList.css'

export default function TicketItems({ticket, user, handleOnClickDelete, fetchTicketItems,setPosition}) {

    const[show, setShow] = useState(false)
    const[conChecked, setConChecked] = useState(false)
    const[resChecked, setResChecked] = useState(false)
    const[conVote, setConVote]=useState()
    const[resVote, setResVote]=useState()
    
    
    
    const handleDetail = () => { setShow(current => !current)
     
            }
    
    let tallyVotes = async ()=> {
        const conVotes = ticket.confirmationVote.length
        const resVotes = ticket.resolvedVote.length
        setConVote(conVotes)
        setResVote(resVotes)
    }
    const handleConChange = async () => { 
        setConChecked((prevCon)=>!prevCon)
        
        let body={ticket,user}
        let jwt = localStorage.getItem('token')
        let options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify(body)
        }
        ticket.confirmationVote.includes(user._id) ?
        await VoteAPI.removeConVote(ticket,options).then(fetchTicketItems()).then(tallyVotes()).then(fetchTicketItems())
            :
            await VoteAPI.addConVote(ticket,options).then(fetchTicketItems()).then(tallyVotes()).then(fetchTicketItems())
    }

    const handleResChange =  () => {
        setResChecked(!resChecked) 
        
        let body={ticket, user}
        let jwt = localStorage.getItem('token')
        let options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify(body)
        }
        ticket.resolvedVote.includes(user._id) ?
             VoteAPI.removeResVote(ticket,options).then(fetchTicketItems()).then(tallyVotes()).then(fetchTicketItems())

            :
             VoteAPI.addResVote(ticket,options).then(fetchTicketItems()).then(tallyVotes()).then(fetchTicketItems())
    }

    let checkUserVotes = async() => {
        if (ticket.confirmationVote.includes(user._id)) {
            setConChecked(true)
        }
        if (ticket.resolvedVote.includes(user._id)) {
            setResChecked(true)
        }
    }

    useEffect( ()=> {
        tallyVotes()
        
    },[ticket,conVote]
    )

    return (
        <div className="">
            <button onClick={handleDetail} className="header-button">
                <TicketHeader                
                    ticket={ticket}
                    user={user}
                    key = {ticket._id} 
                    handleOnClickDelete={handleOnClickDelete} 
                    conVote={conVote}
                    resVote={resVote}
                    tallyVotes={tallyVotes}
                    
                />
                    <p onClick={()=>{return setPosition([ticket.lat,ticket.long])}}> Locate</p>
            </button>
            { show && <TicketDetails             
                ticket={ticket}
                user={user}
                key={ticket._id} 
                conChecked={conChecked}
                resChecked={resChecked}
                handleConChange={handleConChange}
                handleResChange={handleResChange}
                checkUserVotes={checkUserVotes}
            /> }
        </div>
    );
}