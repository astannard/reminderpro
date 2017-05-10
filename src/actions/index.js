import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {

    const action = {
        type: ADD_REMINDER,
        text
    };

    console.log("addReminder action created", action);

    return action;
}


export const deleteReminder = (id) => {

    const action = {
        type: DELETE_REMINDER,
        id
    }

    console.log("delete reminder action created", action);

    return action;
}