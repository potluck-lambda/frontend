import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { restoreData } from '../actions'
import EventCard from './EventCard'

const initialEvents = []

function EventDashboard(props) {
    const [events, setEvents] = useState(initialEvents)

    useEffect(() => {
        console.log('in useEffect')
        axios.get(`https://potluckplanner-2.herokuapp.com/api/potlucks`)
            .then(res => {
                setEvents(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(props)

    useEffect(()=>{
        const userData = localStorage.getItem("user-data");
        let backup;
        if(userData && !props.state.user_id){
            backup = JSON.parse(userData);
            props.dispatch(restoreData(backup));
        }else if( userData && props.state.user_id){
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
        else{
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
    },[props.state]);

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

export default connect(state=>{
    return{state}
})(EventDashboard)