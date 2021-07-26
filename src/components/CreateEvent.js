import React, { useState } from 'react'

const initialValues = {
    event_name: '',
    event_date: '',
    event_time: '',
    event_location: '',

    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',

    event_description: ''
}

const initialErrors = {
    event_name: '',
    event_date: '',
    event_time: '',
    event_location: '',
}

const dummyArray = []

function CreateEvent(props) {

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)

    const [dummy, setDummy] = useState(dummyArray)

    const {
        disabled
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        
        const newPotluck = {
            // event_name: formValues.event_name.trim(),
            // event_date: formValues.event_date,
            // event_time: formValues.event_time,
            // event_location: formValues.event_location.trim(),
            // item1: formValues.item1.trim(),
            // item2: formValues.item2.trim(),
            // item3: formValues.item3.trim(),
            // item4: formValues.item4.trim(),
            // item5: formValues.item5.trim(),
            // event_description: formValues.event_description.trim()
            ...formValues            
        }
        console.log(newPotluck)
        setDummy([...dummy, newPotluck])
        console.log(dummy)
        setFormValues(initialValues)
        setFormErrors(initialErrors)
        // postNewPotluck(newPotluck) // For now, make a dummy array, but make sure this gets (axios.post)ed to the API that the backend guys create
    }

    const onChange = evt => {
        const { name, value } = evt.target
        setFormValues({ ...formValues, [name]: value })
    }

    return(
        <div>
            <header>
                <h2>Create Event</h2>
                <nav>
                    {/* These buttons will both link back to the List of Events page */}
                    <button>Cancel</button>                    
                </nav>
            </header>
            <div className='createEventForm'>
                <form id='new-event-form' onSubmit={onSubmit}>

                    <div className='valid-errors'>
                        <div>{formErrors.event_name}</div>
                        <div>{formErrors.event_date}</div>
                        <div>{formErrors.event_time}</div>
                        <div>{formErrors.event_location}</div>
                    </div>

                    <label>Event Name:
                        <input 
                            name='event_name'
                            type='text'
                            value={formValues.event_name}
                            onChange={onChange}
                        />
                    </label>

                    <label>Date:
                        <input 
                            name='event_date'
                            type='date'
                            value={formValues.event_date}
                            onChange={onChange}
                        />
                    </label>

                    <label>Time:
                        <input 
                            name='event_time'
                            type='time'
                            value={formValues.event_time}
                            onChange={onChange}
                        />
                    </label>

                    <label>Event Location:
                        <input 
                            name='event_location'
                            type='text'
                            value={formValues.event_location}
                            onChange={onChange}
                        />                        
                    </label>

                    <fieldset>
                        {/* Eventually, I think it should be set up to have 1 input box and a button that adds more input boxes as desired. 5 boxes will do for now, I believe. */}
                        <legend>Items to bring (optional):</legend>

                        <input 
                            name='item1'
                            type='text'
                            value={formValues.item1}
                            onChange={onChange}
                        />
                        <input 
                            name='item2'
                            type='text'
                            value={formValues.item2}
                            onChange={onChange}
                        />
                        <input 
                            name='item3'
                            type='text'
                            value={formValues.item3}
                            onChange={onChange}
                        />
                        <input 
                            name='item4'
                            type='text'
                            value={formValues.item4}
                            onChange={onChange}
                        />
                        <input 
                            name='item5'
                            type='text'
                            value={formValues.item5}
                            onChange={onChange}
                        />
                    </fieldset>

                    <label>Description (optional):
                        <input 
                            name='event_description'
                            type='text'
                            value={formValues.event_description}
                            onChange={onChange}
                        />
                    </label>

                    <button id='submitBtn' disabled={disabled}>Submit</button>
                </form>
            </div>
        </div>        
    )
}

export default CreateEvent