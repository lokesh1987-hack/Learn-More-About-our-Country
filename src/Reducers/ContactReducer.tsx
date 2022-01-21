import { GET_DATA_FROM_CONTACT, DISPLAY_CONTACT_DATA } from '../Actions/ContactFormAction'

const initialState = {
    contact_data: []
}

export default function contactReducer(state = initialState, action: { type: any; payload: any; data: any }) {
    switch (action.type) {
        case GET_DATA_FROM_CONTACT:
            return {
                ...state,
                contact_data: [...state.contact_data,action.payload]
            }
        case DISPLAY_CONTACT_DATA:
            return {
                ...state,
                contact_data: action.data
            }
        default:
            return state
    }
}
