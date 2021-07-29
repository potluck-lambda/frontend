// How individual events will display on the DOM on the event dashboard page
import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


function EventCard(props) {

    const history = useHistory()
    const { details } = props

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

    // Styling
    const CardContainer = styled.div`
    color: ${props => props.theme.black};
    background-color: #E8E8E8;
    color: #4F4F4F;
    border-radius: 8px;
    margin-top: 2%;
    width: 88%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 2%;
    `
    const StateCaps = styled.span`
    text-transform: uppercase;
    `
    const StyledButton = styled.button`
    background-color: #3F51B5;
    color: #FFFFFF;
    margin-left: 1%;
    margin-right: 1%;

    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #F50057;
    };
    `
    const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    width: 95%;
    border-radius: 8px;
    border-bottom: 2px solid #3F51B5;
    padding-top: 2%;
    `

    if(!details) {
        return <h3>Fetching potlucks</h3>
    }
    return (
        <CardContainer>
            <HeaderContainer>
                <h3>{details.potluck_name}</h3>
                <p>{details.potluck_description}</p>
            </HeaderContainer>            
            <p>{details.potluck_date}</p>
            <p>{details.potluck_time}</p>

            <p>{details.potluck_street}</p>

            <p>{details.potluck_city},
            <StateCaps> {details.potluck_state},</StateCaps>
            <span> {details.potluck_country},</span>
            <span> {details.potluck_zip}</span>
            </p>

            <div className='buttons'>
                <StyledButton>Sign Up!</StyledButton>
                <StyledButton onClick={EditPotluck}>Edit Potluck</StyledButton>
                <StyledButton onClick={DeletePotluck}>Delete Potluck</StyledButton>
            </div>
        </CardContainer>
    )
}

export default EventCard