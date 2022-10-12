import { useEffect } from "react";

export default function TicketDetails({ticket, checkUserVotes, conChecked, handleConChange, resChecked, handleResChange}) {

    useEffect( ()=> {
        checkUserVotes()
    },[]
    ) 
    
    return (
        <div className="ticket-details">
            <p>Description: {ticket.description}</p>
            <p>Images Coming Soon!</p>
                <p>Vote to confirm ticket accuracy:</p>
                <input 
                    type="checkbox" 
                    checked={conChecked}
                    onChange={handleConChange}
                />
                <p>Vote if ticket issue is resolved:</p>
                <input 
                    type="checkbox" 
                    checked={resChecked}
                    onChange={handleResChange}
                />
        </div>
    );
}