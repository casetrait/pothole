import './FormPage.css'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import TicketForm from '../../components/TicketForm/TicketForm'
import * as ticketsAPI from '../../utilities/tickets-api';

import React from 'react'
export default function FormPage(props) {
    
    const [ticketItems, setTicketItems]=useState([]);
    let fetchTicketItems=async ()=> {
        const tickets = await ticketsAPI.getAll()
        setTicketItems(tickets)
    }
    useEffect( ()=> {
        //load ticketItems 
        fetchTicketItems()
    },[]
    )

    

        return(
            <main className="">
                    <NavBar />
                    <TicketForm ticketItems={ticketItems} />
            </main>
        )
    }
