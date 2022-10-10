import TicketItems from "../TicketItems/TicketItems";
import "./TicketList.css"

export default function TicketList({ticketItems}) {
    
    return (
        <div className = 'ticketcontainer'>
            {ticketItems.map(ticket => 
                <TicketItems key = {ticket._id} ticket = {ticket} /> 
            )}
        </div>
    )
    
}