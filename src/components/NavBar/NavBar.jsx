import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './NavBar.css'


export default function NavBar(props) {
    return (
        <nav className="">
            <Link to="/home" className="menu-logo"><Logo /></Link>
            <Link to="/tickets" className="menu">All Tickets</Link>
            <Link to="/new" className="menu">Open A Ticket</Link>
        </nav>
    );
}