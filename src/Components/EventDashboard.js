import React, { useState, useEffect } from 'react'
import axios from 'axios'

import EventCard from './EventCard'

const initialEvents = []

function EventDashboard(props) {
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
            <h2>Potlucks</h2>
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