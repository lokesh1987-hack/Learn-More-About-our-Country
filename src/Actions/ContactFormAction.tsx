
export const GET_DATA_FROM_CONTACT = "GET_DATA_FROM_CONTACT"
export const DISPLAY_CONTACT_DATA = "DISPLAY_CONTACT_DATA"


export function getFormData(data: any){  
    return (dispatch: (arg0: { type: string; payload: any; }) => any) => {  
        return dispatch({       
            type: 'GET_DATA_FROM_CONTACT',  
            payload: data  
        });  
    }  
}; 

