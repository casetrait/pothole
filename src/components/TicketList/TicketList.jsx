import TicketItems from "../TicketItems/TicketItems";
import "./TicketList.css"

export default function TicketList({ticketItems}) {
    // const tickets = ticketItems.map(ticket =>
    //     <TicketItems ticket = {ticket}/>
            // )
            // handleShowDetail={props.handleShowDetail}
            // handleConfirmationVote={props.handleConfirmationVote}
            // handleResolvedVote={props.handleResolvedVote}
    
    return (
        <div className = 'ticketcontainer'>
            {ticketItems.map(ticket => <TicketItems key={ticket._id} ticket = {ticket}> Ticket</TicketItems>)}
            
        </div>)
    
}