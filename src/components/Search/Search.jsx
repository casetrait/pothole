import './Search.css'

export default function Search(
    {fetchTicketItems,handleYourTickets,user,handleChangeCategory,handleMostConfirmed}
    ) {
    return (
        <div className="filter-list">
            <h2>Filters:</h2>
            <button className='filter-button' onClick = {()=>handleYourTickets(user._id)}>Your Tickets</button>
            <button className='filter-button'>
                <p className='cat'>Categories:</p>
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
            </button>
            <button className='filter-button' onClick = {()=>handleMostConfirmed()}>Most Confirmed</button>
            <button className='filter-button' onClick = {()=>handleMostConfirmed()}>Most Resolved</button>
            <button className='filter-button' onClick = {()=>fetchTicketItems()}>Most Recent</button>
        </div>
    );
}