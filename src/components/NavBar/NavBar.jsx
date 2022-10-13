import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './NavBar.css'


export default function NavBar({handleLogout}) {
    
    let jwt = localStorage.getItem('token')

    return (
        jwt ? (
            <nav className="nav-grid">
                <Link to="/home" className="menu-img"><Logo /></Link>
                <Link to="/tickets" className="menu-img" id="all"><img src='/images/all.png' width='200px' alt ='All Tickets'/></Link>
                <Link to="/new" className="menu-img"><img src='/images/new.png' width='200px' alt ='New Ticket'/></Link>
                <Link className="menu-img" onClick={()=>handleLogout()}><img src='/images/logout.png' width='200px' alt ='Logout'/></Link>
            </nav>
        ) : (
            <nav className="nav-grid">
                <Link to="/home" className="menu-img"><Logo /></Link>
                <Link to="/login" className="menu-img"><img src='/images/login.png' width='200px' alt ='Login'/></Link>
            </nav>
        )
    );
}