import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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


    return (
        <div>
            <h2>Potlucks Dashboard</h2>
            <Link to='/protected/createevent'>
                <button>Create new potluck</button>
            </Link>
            
            {
                events.map(ev => {
                    return (
                        <EventCard key={ev.potluck_id} details={ev} />
                    )
                })
            }
        </div>
    )
}

export default EventDashboard