import './FormPage.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'

//Needs to be refactored into hooks
export default class FormPage extends Component {
    state = {

    }

    async componentDidMount() {

    }

    render() {
        return(
            <main className="OrderHistoryPage">
                <nav>
                    Nav Items Here:
                    <Link to="/home" className=""><Logo /></Link>
                    <Link to="/tickets" className="">All Tickets</Link>
                    <Link to="/new" className="">Open A Ticket</Link>
                </nav>
          </main>
        )
    }
}