import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import EventCard from './EventCard'

const initialEvents = []

function EventDashboard() {
    const [events, setEvents] = useState(initialEvents)

    useEffect(() => {
        console.log('in useEffect')
        axios.get(`https://potluckplanner-2.herokuapp.com/api/potlucks`)
            .then(res => {
                console.log(res.data)
                setEvents(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const MasterCardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    `
    const StyledButton = styled.button`
    background-color: #3F51B5;
    color: #FFFFFF;

    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #F50057;
    };
    `

    return (
        <MasterCardsContainer>
            <h2>Potlucks Dashboard</h2>
            <Link to='/protected/createevent'>
                <StyledButton>Create new potluck</StyledButton>
            </Link>
            <MasterCardsContainer>
            {
                events.map(ev => {
                    return (
                        <EventCard key={ev.potluck_id} details={ev} />
                    )
                })
            }    
            </MasterCardsContainer>
            
        </MasterCardsContainer>
    )
}

export default EventDashboard