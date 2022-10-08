import './IndexPage.css'
import { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Map from '../../components/Map/Map'
import TicketList from '../../components/TicketList/TicketList'

//Needs to be refactored into hooks
export default class IndexPage extends Component {
    state = {

    }


    render() {
        return(
            <main className="">
                    <NavBar />
                    <h1>Index Page</h1>
                    <Search />
                    <Map />
                    <TicketList />
            </main>
        )
    }
}