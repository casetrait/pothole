import { useState } from 'react'
import TicketHeader from "../TicketHeader/TicketHeader";
import TicketDetails from "../TicketDetails/TicketDetails";
import '../TicketList/TicketList.css'

export default function TicketItems(props) {

    const[show, setShow] = useState(false)

    const handleDetail = () => { setShow(current => !current) }

    return (
        <div className="">
            <button onClick={handleDetail} className="header-button">
                <TicketHeader {...props} key = {props.ticket._id}/>
            </button>
            { show && <TicketDetails {...props} key = {props.ticket._id}/> }
        </div>
    );
}