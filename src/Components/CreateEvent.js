import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import styled from 'styled-components'
// import { reach } from 'yup'

// So that dates in the past are not valid
const today = new Date();
today.setHours(0, 0, 0, 0)

const initialValues = {
    potluck_name: '',
    potluck_date: '',
    potluck_time: '',
    
    potluck_street: '',
    potluck_city: '',
    potluck_state: '',
    potluck_country: '',
    potluck_zip: '',

    potluck_description: '',

    user_id: 1 // test : will have to be made dynamic once we get the ability to create users
}

const initialErrors = {
    potluck_name: '',
    potluck_date: '',
    potluck_time: '',

    potluck_street: '',
    potluck_city: '',
    potluck_state: '',
    potluck_country: '',
    potluck_zip: '',
}

const initialDisabled = true

// temp
const initialArray = []

 // Styling
 const StyledButton = styled.button`
 background-color: #3F51B5;
 color: #FFFFFF;

 transition: all 0.2s ease-in-out;
 &:hover {
     transition: all 0.2s ease-in-out;
     background-color: #F50057;
 };

 &:disabled {
 background-color: #4F4F4F;
 }
 `
 const MasterContainer = styled.div`
 width: 100%;
 display: flex;
 flex-flow: column;
 align-items: center;
 `
 const CancelButtonNav = styled.nav`
 margin-bottom: 2%;
 `
 const StyledForm = styled.form`
 display: flex;
 flex-flow: column;
 align-items: center;
 `
 const GeneralLabel = styled.label`
 margin-bottom: 2%;
 color: #4F4F4F;
 `
 const GeneralInput = styled.input`
 color: #4F4F4F;
 background-color: #E8E8E8;
 border-radius: 2px;
 border: 1px solid #4F4F4F;
 `
 const StyledFieldset = styled.fieldset`
 display: flex;
 flex-flow: column;
 align-items: center;
 margin-bottom: 5%;
 border-radius: 6px;
 border: 2px solid #3F51B5;
 `
 const GeneralSelect = styled.select`
 color: #4F4F4F;
 background-color: #E8E8E8;
 border-radius: 2px;
 border: 1px solid #4F4F4F;
 `

function CreateEvent(props) {    

    const history = useHistory();

    // temp
    const [events, setEvents] = useState(initialArray)

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onSubmit = evt => {
        evt.preventDefault()
        
        const newPotluck = {
            ...formValues            
        }
        console.log(newPotluck)

        axios.post(`https://potluckplanner-2.herokuapp.com/api/potlucks`, newPotluck)
            .then(res => {
                console.log('res', res)
                setEvents(...events, res.data)
                setTimeout(() => {
                    history.push('/protected/eventlist')    
                }, 500)
                
            })
            .catch(err => {console.log(err)})
            .finally(() => {setFormValues(initialValues)}, setFormErrors(initialErrors))
    }

    const onChange = evt => {
        const { name, value } = evt.target
        setFormValues({ ...formValues, [name]: value })
    }

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])    

    

    // FORM
    return(
        <MasterContainer>
            <MasterContainer>
                <h2>Create Event</h2>
                <CancelButtonNav>
                    <Link to='/protected/eventlist'>
                        <StyledButton>Cancel</StyledButton>     
                    </Link>
                                       
                </CancelButtonNav>
            </MasterContainer>
            <div className='createEventForm'>
                <StyledForm id='new-event-form' onSubmit={onSubmit}>

                    <div className='valid-errors'>
                        <div>{formErrors.potluck_name}</div>
                        <div>{formErrors.potluck_date}</div>
                        <div>{formErrors.potluck_time}</div>

                        <div>{formErrors.potluck_street}</div>
                    </div>

                    <GeneralLabel>Event Name: 
                        <GeneralInput 
                            name='potluck_name'
                            type='text'
                            value={formValues.potluck_name}
                            onChange={onChange}
                        />
                    </GeneralLabel>

                    <GeneralLabel>Date: 
                        <GeneralInput 
                            name='potluck_date'
                            type='date'
                            value={formValues.potluck_date}
                            onChange={onChange}
                        />
                    </GeneralLabel>

                    <GeneralLabel>Time: 
                        <GeneralInput 
                            name='potluck_time'
                            type='time'
                            value={formValues.potluck_time}
                            onChange={onChange}
                        />
                    </GeneralLabel>

                    <StyledFieldset>
                        <legend>Event Address</legend>
                        <GeneralLabel forhtml='potluck_street'>Street</GeneralLabel>
                        <GeneralInput 
                            id='potluck_street'
                            name='potluck_street'
                            type='text'
                            value={formValues.potluck_street}
                            onChange={onChange}
                        />
                        <GeneralLabel forhtml='potluck_city'>City</GeneralLabel>
                        <GeneralInput 
                            id='potluck_city'
                            name='potluck_city'
                            type='text'
                            value={formValues.potluck_city}
                            onChange={onChange}
                        />
                        <GeneralLabel forhtml='potluck_state'>State (XX)</GeneralLabel>
                        <GeneralInput 
                            id='potluck_state'
                            name='potluck_state'
                            type='text'
                            value={formValues.potluck_state}
                            onChange={onChange}
                        />
                        <GeneralLabel forhtml='potluck_country'>Country</GeneralLabel>
                        <GeneralSelect
                            id='potluck_country'
                            name='potluck_country'
                            value={formValues.potluck_country}
                            onChange={onChange}
                        >
                            <option value=''>Select a Country</option>
                            <option value='USA'>United States of America</option>
                        </GeneralSelect>
                        <GeneralLabel forhtml='potluck_zip'>ZIP Code</GeneralLabel>
                        <GeneralInput 
                            id='potluck_zip'
                            name='potluck_zip'
                            type='number'
                            value={formValues.potluck_zip}
                            onChange={onChange}
                        />
                    </StyledFieldset>                    

                    <GeneralLabel>Description (optional):
                        <GeneralInput 
                            name='potluck_description'
                            type='text'
                            value={formValues.potluck_description}
                            onChange={onChange}
                        />
                    </GeneralLabel>
                
                    <StyledButton id='submitBtn' disabled={disabled}>Submit</StyledButton>
                </StyledForm>
            </div>
        </MasterContainer>        
    )
}

// FORM VALIDATION
const formSchema = yup.object().shape({

    potluck_name: yup
        .string()
        .trim()
        .required('please name your event'),
    
    // currently allows the setting of times (not days) in the past
    potluck_date: yup
        .date()
        .required('please select a date')
        .min(today, 'date cannot be in the past'),        

    potluck_time: yup
        .string()
        .required('please select a time'),


    potluck_street: yup
        .string()
        .required('please provide a street'),
    potluck_city: yup
        .string()
        .required('please provide a city'),
    potluck_state: yup
        .string()
        .required('please provide a state')
        .min(2, 'two character states')
        .max(2, 'two characters only (ex. TX)'),
    potluck_country: yup
        .string()
        .required('please select a country'),
    potluck_zip: yup
        .string()
        .required('please provide a zip code')
        .min(5)
        .max(5)
})

export { CreateEvent, formSchema }