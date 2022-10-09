import TicketItems from "../TicketItems/TicketItems";


export default function TicketList({ticketItems}) {
    const tickets = ticketItems.map(ticket =>
        <TicketItems 
            ticket = {ticket}
            // handleShowDetail={props.handleShowDetail}
            // handleConfirmationVote={props.handleConfirmationVote}
            // handleResolvedVote={props.handleResolvedVote}
        />
    )
    
    return (
        <div className="">
            <h2>All Tickets</h2>
            {tickets}
        </div>
    );
}