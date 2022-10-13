import '../TicketItems/TicketItems.css'

export default function TicketHeader({ticket,handleOnClickDelete,user,conVote,resVote,tallyVotes}) {
   
    return (
        <div className="ticket-header">
            <h2>{ticket.title}</h2> 
            <h3>{ticket.category}</h3>
            <h3 className="vote">Votes: {conVote}</h3>
            <h3 className="vote">Votes: {resVote}</h3>
            {user._id===ticket.reporter?<button onClick={()=>handleOnClickDelete(ticket._id)}>Delete</button>:null}
        </div>
    );
}