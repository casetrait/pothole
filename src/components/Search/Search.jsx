export default function Search(
    {handleYourTickets,user}
    ) {
    return (
        <div className="">
            <h3 onClick = {()=>handleYourTickets(user._id)}>Your Tickets</h3>
           
        </div>
    );
}