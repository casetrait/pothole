import TicketHeader from "../TicketHeader/TicketHeader";
import TicketDetails from "../TicketDetails/TicketDetails";


export default function TicketItems(props) {
    return (
        <div className="">
            <TicketHeader {...props}/>
            <TicketDetails {...props}/>
        </div>
    );
}