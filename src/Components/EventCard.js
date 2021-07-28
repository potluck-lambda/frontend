// How individual events will display on the DOM on the event dashboard page
import axios from 'axios'
import React from 'react'



function EventCard(props) {
    const { details } = props

    if(!details) {
        return <h3>Fetching potlucks</h3>
    }

    function DeletePotluck(e) {
        e.preventDefault()
    
        const { potluck_id } = details
    
        console.log('delete', potluck_id)
        axios.delete(`https://potluckplanner-2.herokuapp.com/api/potlucks/${potluck_id}`)
            .then(res => console.log('res', res))
            .catch(err => console.log(err))
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
                <button onClick={DeletePotluck}>Delete Potluck</button>
            </div>
        </div>
    )
}

export default EventCard