import TicketItems from "../TicketItems/TicketItems";


export default function TicketList(props) {
    return (
        <div className="">
            <h1>TicketList</h1>
            {/* map function here */}
            <TicketItems />
        </div>
    );
}