import {combineReducers} from 'redux'
import countryReducer from './CountriesReducer'
import contactReducer from './ContactReducer'

const rootReducer = combineReducers({
    contact :contactReducer,
    country :countryReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>