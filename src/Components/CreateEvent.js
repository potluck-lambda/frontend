import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
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

    potluck_description: ''
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

const dummyArray = []

function CreateEvent(props) {

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    // temporary - replace with a backend pull
    const [dummy, setDummy] = useState(dummyArray)

    const onSubmit = evt => {
        evt.preventDefault()
        
        const newPotluck = {
            ...formValues            
        }
        // temporary behavior. this puts newPotluck into dummy, but will eventually post to backend
        console.log(newPotluck)
        setDummy([...dummy, newPotluck])
        console.log(dummy)
        setFormValues(initialValues)
        setFormErrors(initialErrors)
    }

    // Currently, the errors do not display on the DOM, but they DO stop the submit button from prematurely activating
    // const validate = (name, value) => {
    //     reach(formSchema, name)
    //         .validate(value)
    //         .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    //         .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    // }

    const onChange = evt => {
        const { name, value } = evt.target
        setFormValues({ ...formValues, [name]: value })
    }

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])    

    // FORM
    return(
        <div>
            <header>
                <h2>Create Event</h2>
                <nav>
                    {/* The cancel buttons will eventually link back to the List of Events page */}
                    <button>Cancel</button>                    
                </nav>
            </header>
            <div className='createEventForm'>
                <form id='new-event-form' onSubmit={onSubmit}>

                    <div className='valid-errors'>
                        <div>{formErrors.potluck_name}</div>
                        <div>{formErrors.potluck_date}</div>
                        <div>{formErrors.potluck_time}</div>

                        <div>{formErrors.potluck_street}</div>
                    </div>

                    <label>Event Name:
                        <input 
                            name='potluck_name'
                            type='text'
                            value={formValues.potluck_name}
                            onChange={onChange}
                        />
                    </label>

                    <label>Date:
                        <input 
                            name='potluck_date'
                            type='date'
                            value={formValues.potluck_date}
                            onChange={onChange}
                        />
                    </label>

                    <label>Time:
                        <input 
                            name='potluck_time'
                            type='time'
                            value={formValues.potluck_time}
                            onChange={onChange}
                        />
                    </label>

                    <fieldset>
                        <legend>Event Address</legend>
                            <label forhtml='potluck_street'>Street</label>
                            <input 
                                id='potluck_street'
                                name='potluck_street'
                                type='text'
                                value={formValues.potluck_street}
                                onChange={onChange}
                            />
                            <label forhtml='potluck_city'>City</label>
                            <input 
                                id='potluck_city'
                                name='potluck_city'
                                type='text'
                                value={formValues.potluck_city}
                                onChange={onChange}
                            />
                            <label forhtml='potluck_state'>State</label>
                            <input 
                                id='potluck_state'
                                name='potluck_state'
                                type='text'
                                value={formValues.potluck_state}
                                onChange={onChange}
                            />
                            <label forhtml='potluck_country'>Country</label>
                            <select
                                id='potluck_country'
                                name='potluck_country'
                                value={formValues.potluck_country}
                                onChange={onChange}
                            >
                                <option value=''>Select a Country</option>
                                <option value='USA'>United States of America</option>
                            </select>
                            <label forhtml='potluck_zip'>ZIP Code</label>
                            <input 
                                id='potluck_zip'
                                name='potluck_zip'
                                type='number'
                                value={formValues.potluck_zip}
                                onChange={onChange}
                            />
                    </fieldset>                    

                    <label>Description (optional):
                        <input 
                            name='potluck_description'
                            type='text'
                            value={formValues.potluck_description}
                            onChange={onChange}
                        />
                    </label>

                    <button id='submitBtn' disabled={disabled}>Submit</button>
                </form>
            </div>
        </div>        
    )
}

// FORM VALIDATION
const formSchema = yup.object().shape({

    potluck_name: yup
        .string()
        .trim()
        .required('please name your event'),
    
    // currently allows the setting of times in the past
    potluck_date: yup
        .date()
        .required('please select a date')
        .min(today, 'date cannot be in the past'),        

    potluck_time: yup
        .string()
        .required('please select a time'),

    // event_location: yup
    //     .string()
    //     .trim()
    //     .required('please provide a location'),
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

// test