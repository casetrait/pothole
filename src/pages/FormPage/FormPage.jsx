import './FormPage.css'
import { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import TicketForm from '../../components/TicketForm/TicketForm'

//Needs to be refactored into hooks
export default class FormPage extends Component {
    state = {

    }


    render() {
        return(
            <main className="">
                    <NavBar />
                    <TicketForm />
            </main>
        )
    }
}