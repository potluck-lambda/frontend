import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { restoreData } from '../actions'
import EventCard from './EventCard'

const initialEvents = []

function EventDashboard(props) {
    const [events, setEvents] = useState(initialEvents)
    console.log(props.state.user_id)

    useEffect(() => {
        axios.get(`https://potluckplanner-2.herokuapp.com/api/potlucks`)
            .then(res => {
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

export default connect(state=>{
    return{state}
})(EventDashboard)