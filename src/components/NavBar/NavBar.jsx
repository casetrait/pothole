import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './NavBar.css'
import all from '../../static/images/All.png'
import New from '../../static/images/New.png'
import logout from '../../static/images/Logout.png'
import login from '../../static/images/Login.png'


export default function NavBar({handleLogout}) {
    
    let jwt = localStorage.getItem('token')

    return (
        jwt ? (
            <nav className="nav-grid">
                <Link to="/home" className="menu-img"><Logo /></Link>
                <Link to="/tickets" className="menu-img" id="all"><img src={all} width='200px' alt ='All Tickets'/></Link>
                <Link to="/new" className="menu-img"><img src={New} width='200px' alt ='New Ticket'/></Link>
                <Link className="menu-img" onClick={()=>handleLogout()}><img src={logout} width='200px' alt ='Logout'/></Link>
            </nav>
        ) : (
            <nav className="nav-grid">
                <Link to="/home" className="menu-img"><Logo /></Link>
                <Link to="/login" className="menu-img"><img src={login} width='200px' alt ='Login'/></Link>
            </nav>
        )
    );
}