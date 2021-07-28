// How individual events will display on the DOM on the event dashboard page
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'


function EventCard(props) {
    // useEffect(() => {
    //     console.log('refresh')
    // })
    const history = useHistory()
    const { details } = props

    useEffect(() => {
        console.log('refresh')
    }, [])

    function EditPotluck(e) {
        e.preventDefault()
        history.push(`/protected/editevent/${details.potluck_id}`)
    }

    function DeletePotluck(e) {
        e.preventDefault()
    
        const { potluck_id } = details
    
        console.log('delete', potluck_id)
        axios.delete(`https://potluckplanner-2.herokuapp.com/api/potlucks/${potluck_id}`)
            .then(res => console.log('res', res))
            .catch(err => console.log(err))
            // .finally(setTimeout(() => {window.location.reload()}), 10000)
    }

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
                <button onClick={EditPotluck}>Edit Potluck</button>
                <button onClick={DeletePotluck}>Delete Potluck</button>
            </div>
        </div>
    )
}

export default EventCard