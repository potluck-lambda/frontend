import React from 'react'
import { useHistory } from 'react-router-dom'

function HomePage (props){
    const { push } = useHistory()
    return (
        <div className = 'App'>
            <div className='topContent'>
                <h1>Welcome to the Potluck Planner!</h1>
                <img  className= 'grillImg' src= 'https://i.kym-cdn.com/photos/images/original/001/556/116/4fb.png' alt = 'Get grilling!' width='300vh'/>
            </div>
            <div className= 'buttons'>
                <button onClick={() => push('/login')} className= 'login'>Login</button>
                <button onClick={() => push('/sign-up')} className= 'signup'>Sign Up</button>
            </div> 
        </div>
    );
}

export default HomePage