import { GET_DATA, LOAD_USERS_LOADING, ADD_COUNTRY} from '../Actions/CountriesPageAction'

const initialState = {
    country_data :[],
    loading : true
}


export default function countryReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOAD_USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_DATA:
            return {
                ...state,
                loading: false,
                country_data: action.data
            }
        case ADD_COUNTRY:
            return {
                ...state,
                country_data: state.country_data.concat(action.payload)
            }
        default:
            return state
    }
}
