import { useEffect } from "react";

export default function TicketDetails({ticket, checkUserVotes, conChecked, handleConChange, resChecked, handleResChange}) {

    useEffect( ()=> {
        checkUserVotes()
    },[]
    ) 
    
    return (
        <div className="ticket-details">
            <div className="left">
                <strong>Description: </strong>
                <p>{ticket.description}</p>
            </div>
            <div className="left">
                <strong>Date Added: </strong>
                <p>{ticket.createdAt.toString().substr(0,10)}</p>
            </div>
            <div>
                <p>Vote to confirm ticket accuracy:</p>
                <input 
                    type="checkbox" 
                    checked={conChecked}
                    onChange={handleConChange}
                />
            </div>
            <div>
                <p>Vote if ticket issue is resolved:</p>
                <input 
                    type="checkbox" 
                    checked={resChecked}
                    onChange={handleResChange}
                />
            </div>
        </div>
    );
}