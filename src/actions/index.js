import { axiosWithAuth } from "../helper/axiosWithAuth"

export const PLACEHOLDER = 'PLACEHOLDER'
export const LOGIN = "LOGIN";
export const LOAD_EVENTS = "LOAD_EVENTS";

export const login = (id,events,username) => {
    return(dispatch) => {
       dispatch({type:LOGIN, payload:id, userName: username});
       dispatch({type:LOAD_EVENTS, payload: events});
    }
}