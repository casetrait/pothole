
export default function Search(
    {fetchTicketItems,handleYourTickets,user,handleChangeCategory}
    ) {
    return (
        <div className="">
            <h2>Filters:</h2>
            <p onClick = {()=>fetchTicketItems()}>All Tickets </p>
            <p onClick = {()=>handleYourTickets(user._id)}>Your Tickets</p>
            <p>Categories:</p>
            <select onChange={handleChangeCategory}>
            <option >Select Category</option>
            <option value="Pothole">Pothole</option>
            <option value="Drainage">Drainage</option>
            <option value="Pedestrian">Pedestrian</option>
            <option value="Traffic Light">Traffic Light</option>
            <option value="Speed Limit">Speed Limit</option>
            <option value="Snow">Snow</option>
            <option value="Ice">Ice</option>
            </select>
           
        </div>
    );
}