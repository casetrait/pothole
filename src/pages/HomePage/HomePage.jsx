import './HomePage.css'
import { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Logo from '../../components/Logo/Logo'

//Needs to be refactored into hooks
export default class FormPage extends Component {
    state = {

    }


    render() {
        return(
            <main className="">
                    <NavBar />
                    <h1>Home Page</h1>
                    <img src='/images/CircleLogo.png' width='400px'/>
            </main>
        )
    }
}