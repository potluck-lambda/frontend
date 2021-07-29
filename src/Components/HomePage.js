import React from 'react'
import { useHistory } from 'react-router-dom'

function HomePage (props){
    const { push } = useHistory()
    return (
        <div className = 'App' >
            <div className='topContent'>
                <h1 style={TitleStyle}>Welcome to the Potluck Planner!</h1>
                <img  className= 'grillImg' src= 'https://i.kym-cdn.com/photos/images/original/001/556/116/4fb.png' alt = 'Get grilling!' width='300vh'/>
            </div>
            <div className= 'buttons'>
                <button onClick={() => push('/login')} className= 'login' style={ButtonStyle}>Login</button>
                <button onClick={() => push('/sign-up')} className= 'signup' style={ButtonStyle}>Sign Up</button>
            </div> 
        </div>
    );
}

const ButtonStyle = {
    fontSize:'2em',
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#dbd7af',
};

const TitleStyle = {
    fontSize:'4em',
    textAlign:'center',
    color:'#e31251',
};



export default HomePage