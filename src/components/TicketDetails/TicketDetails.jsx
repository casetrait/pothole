export default function TicketDetails(props) {
    return (
        <div className="ticket-details">
            <p>Description: {props.ticket.description}</p>
            <p>Vote to confirm ticket:</p>
            <p>Vote if ticket is resolved:</p>
            <p>Images Coming Soon! {props.ticket.images}</p>
        </div>
    );
}