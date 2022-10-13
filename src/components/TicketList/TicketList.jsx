import TicketItems from "../TicketItems/TicketItems";
import "./TicketList.css"

export default function TicketList({ticketItems,user,handleOnClickDelete,fetchTicketItems,setPosition}) {
    
    return (
        <div className = 'ticketcontainer'>
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