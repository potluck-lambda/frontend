import { axiosWithAuth } from "../helper/axiosWithAuth"

export const PLACEHOLDER = 'PLACEHOLDER'
export const LOGIN = "LOGIN";
export const LOAD_EVENTS = "LOAD_EVENTS";
export const RESTORE_DATA = "RESTORE_DATA";

export const login = (id,events,username) => {
    return(dispatch) => {
       dispatch({type:LOGIN, payload:id, userName: username});
       dispatch({type:LOAD_EVENTS, payload: events});
    }
}

export const getEvents = () => {
    return (dispatch) => {
        axiosWithAuth()
            .get("/api/potlucks")
            .then(res => {
                dispatch({ type: LOAD_EVENTS, payload: res.data })
            })
    }
}

export const restoreData = (backup)=>{
    return {type:RESTORE_DATA, payload: backup}
}