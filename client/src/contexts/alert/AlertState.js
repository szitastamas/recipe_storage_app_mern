import React, { useReducer } from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import uuid from 'uuid'
import {
    SET_ALERT,
    CLEAR_ALERT
} from '../reducerTypes'

const AlertState = (props) => {

    const initialState = [];

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type, timeout = 2500) => {
        const id = uuid.v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })

        setTimeout( () => {
            dispatch({
                type: CLEAR_ALERT,
                payload: id
            })
        }, timeout)
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;