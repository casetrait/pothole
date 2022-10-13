// import Select from '@mui/material/Select';
import './Search.css'

export default function Search(
    {fetchTicketItems,handleYourTickets,user,handleChangeCategory,handleMostConfirmed}
    ) {
    return (
        <div className="filter-list">
            <h2>Filters:</h2>
            <button className='filter-button'>
                <select className='cat-select' onChange={handleChangeCategory}>
                    <option >Categories</option>
                    <option value="Pothole">Pothole</option>
                    <option value="Drainage">Drainage</option>
                    <option value="Pedestrian">Pedestrian</option>
                    <option value="Traffic Light">Traffic Light</option>
                    <option value="Speed Limit">Speed Limit</option>
                    <option value="Snow">Snow</option>
                    <option value="Ice">Ice</option>
                    <option value="Other">Other</option>
                </select>
            </button>
            <button className='filter-button' onClick = {()=>fetchTicketItems()}>Most Recent</button>
            <button className='filter-button' onClick = {()=>handleYourTickets(user._id)}>Your Tickets</button>
            <button className='filter-button' onClick = {()=>handleMostConfirmed()}>Most Confirmed</button>
            <button className='filter-button' onClick = {()=>handleMostConfirmed()}>Most Resolved</button>
            <button className='filter-button' onClick = {()=>fetchTicketItems()}>Reset</button>
        </div>
    );
}