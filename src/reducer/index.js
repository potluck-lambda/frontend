import { LOGIN, LOAD_EVENTS, RESTORE_DATA } from '../actions'

const initialState = {
    user_id: null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user_id: action.payload,
                username: action.userName
            }
        case LOAD_EVENTS:
            return{
                ...state,
                events: action.payload
            }
        case RESTORE_DATA:
            return action.payload;
            
        default:
            return state
    }
}

export default reducer