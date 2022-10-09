import './FormPage.css'
import { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import TicketForm from '../../components/TicketForm/TicketForm'


import React from 'react'

export default function FormPage(props) {


        return(
            <main className="">
                    <NavBar />
                    <TicketForm user={props.user}/>
            </main>
        )
    }
