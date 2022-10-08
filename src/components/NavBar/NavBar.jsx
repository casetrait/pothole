import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './NavBar.css'


export default function NavBar(props) {
    return (
        <nav className="">
                    <Link to="/home" className=""><Logo /></Link>
                    <Link to="/tickets" className="">All Tickets</Link>
                    <Link to="/new" className="">Open A Ticket</Link>
        </nav>
    );
}