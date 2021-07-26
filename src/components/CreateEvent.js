import React from 'react'



function CreateEvent(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <div>
            <header>
                <h2>Create Event</h2>
                <nav>
                    {/* These buttons will both link back to the List of Events page */}
                    <button>Cancel</button>
                    <button id='submitBtn' disabled={disabled}>Submit</button>
                </nav>
            </header>
            <div className='createEventForm'>
                <form id='new-event-form' onSubmit={onSubmit}>
                    <div className='valid-errors'>
                        {/* Complete when required fields are all created */}
                    </div>

                    <label>Event Name:
                        <input 
                            name='event-name-input'
                            type='text'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>

                    <label>Date:
                        <input 
                            name='event-date-input'
                            type='date'
                            value={values.date}
                            onChange={onChange}
                        />
                    </label>

                    <label>Time:
                        <input 
                            name='event-time-input'
                            type='time'
                            value={values.time}
                            onChange={onChange}
                        />
                    </label>

                    <label>Event Location:
                        <input 
                            name='event-location-input'
                            type='text'
                            value={values.location}
                            onChange={onChange}
                        />                        
                    </label>

                    <fieldset>
                        {/* Eventually, I think it should be set up to have 1 input box and a button that adds more input boxes as desired. 5 boxes will do for now, I believe. */}
                        <legend>Items to bring (optional):</legend>

                        <input 
                            name='item1-input'
                            type='text'
                            value={values.item1}
                            onChange={onChange}
                        />
                        <input 
                            name='item2-input'
                            type='text'
                            value={values.item2}
                            onChange={onChange}
                        />
                        <input 
                            name='item3-input'
                            type='text'
                            value={values.item3}
                            onChange={onChange}
                        />
                        <input 
                            name='item4-input'
                            type='text'
                            value={values.item4}
                            onChange={onChange}
                        />
                        <input 
                            name='item5-input'
                            type='text'
                            value={values.item5}
                            onChange={onChange}
                        />
                    </fieldset>

                    <label>Description (optional):
                        <input 
                            name='event-description-input'
                            type='text'
                            value={values.description}
                            onChange={onChange}
                        />
                    </label>
                </form>
            </div>
        </div>        
    )
}

export default CreateEvent