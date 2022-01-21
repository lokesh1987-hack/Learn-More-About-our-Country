import { getAll } from "../ApiCall/ApiServices";

export const GET_DATA = "GET_DATA";
export const LOAD_USERS_LOADING = "REDUX_THUNK_LOAD_USERS_LOADING";
export const ADD_COUNTRY = "ADD_COUNTRY";

export const getData = () => (dispatch: (arg0: { type: string; data?: any; }) => void) => {
  dispatch({ type: LOAD_USERS_LOADING });
  getAll().then((data) => dispatch({ type: GET_DATA, data }));
};

export function addCountry(data: any) {
  return (dispatch: (arg0: { type: string; payload: any; }) => any) => {
    return dispatch({
      type: "ADD_COUNTRY",
      payload: data,
    });
  };
}
