// How individual events will display on the DOM on the event dashboard page
import React from 'react'

function EventCard(props) {
    const { details } = props

    if(!details) {
        return <h3>Fetching potlucks</h3>
    }

    return (
        <div className='potluck-container'>
            <h3>{details.potluck_name}</h3>
            <p>{details.potluck_description}</p>
            <p>{details.potluck_date}</p>
            <p>{details.potluck_time}</p>

            <p>{details.potluck_street}</p>

            <p>{details.potluck_city},
            <span> {details.potluck_state},</span>
            <span> {details.potluck_country},</span>
            <span> {details.potluck_zip}</span>
            </p>

            <div className='buttons'>
                <button>Sign Up!</button>
                <button>Edit Potluck</button>
                <button>Delete Potluck</button>
            </div>
        </div>
    )
}

export default EventCard