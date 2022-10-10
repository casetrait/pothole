import { useState, useEffect } from "react";

export default function TicketDetails(props) {
    
    const[conChecked, setConChecked] = useState(false)
    const[resChecked, setResChecked] = useState(false)

    const handleConChange = () => { 
        setConChecked(!conChecked) 
        //push or pop from array
    }
    const handleResChange = () => { 
        setResChecked(!resChecked) 
        //push or pop from array
    }

    let checkUserVote = async() => {
        // const conVote = await conVoteAPI.getOne()
        // const resVote = await resVoteAPI.getOne()
        // setConChecked(conVote)
        // setResChecked(resVote)
    }

    useEffect( ()=> {
        // checkUserVotes()
    },[]
    ) 
    
    return (
        <div className="ticket-details">
            <p>Description: {props.ticket.description}</p>
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