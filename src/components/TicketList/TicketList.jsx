import TicketItems from "../TicketItems/TicketItems";
import "./TicketList.css"

export default function TicketList({ticketItems,user,handleOnClickDelete,fetchTicketItems,setPosition}) {
    
    return (
        <div className = 'ticketcontainer'>
                <div className="ticket-header" id="list-header">
                    <h2>Route Ticket Title:</h2> 
                    <h3>Category:</h3>
                    <h3 className="vote">Confirmation Votes:</h3>
                    <h3 className="vote">Resolved Votes:</h3>
                    <h3></h3>
                </div>
            {ticketItems.map(ticket => 
                <TicketItems 
                    key = {ticket._id} 
                    ticket = {ticket} 
                    user= {user} 
                    handleOnClickDelete={handleOnClickDelete}
                    fetchTicketItems={fetchTicketItems}
                    setPosition = {setPosition}
                /> 
            )}
        </div>
    )
    
}