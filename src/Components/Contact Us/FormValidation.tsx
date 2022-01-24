import { userInfo } from 'os';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFormData } from '../../Actions/ContactFormAction'
import { useDispatch } from 'react-redux'
 
// type ContextType = { userData: userDataTypes | null };

interface userDataTypes {
    name:string,
    phone_number:string,
    email:string
}
interface Error {
    name?:string,
    phone_number?:string,
    email?:string
}

function FormValidation() {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const [userData, setUserData] = useState<userDataTypes>({
        name: "",
        phone_number: "",
        email: "",
    })

    // const [valid, setValid] = useState({
    //     name: false,
    //     phone_number: false,
    //     email: false,
    // })

    const { name, phone_number, email } = userData;

    const OnChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const submit = (e: any) => {
        e.preventDefault()
        // console.log(userData)
        dispatch(getFormData(userData))
        // dispatch(getFormData(userData))
        navigate("thanks")

    }
    
    const valid: Error = {}
    

    // console.log("valid=",valid)

    return (
        
        <div>
            <div className="text-center m-5">
                <h1>Contact Form</h1>
            </div>
            <div className="container border shadow p-5 w-50">
                <form onSubmit={e => submit(e)}>
                    <div className="mb-3">
                        <label htmlFor ="name" className="form-label">First Name </label>
                        <input name="name" value={name} type="name" onChange={e => OnChange(e)} className="form-control" id="name" required />
                        {(!userData.name) && <p>Required*</p> }
                        {(userData.name.length < 4) && (userData.name.length > 0) && <p>Enter name greater than 4 letter</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                        <div className="d-flex">
                            <input type="number" placeholder="  + 91" className="p-2 ps-2 me-3 w-25" disabled />
                            <input name="phone_number" value={phone_number} type="number" onChange={e => OnChange(e)} className="form-control w-25" id="phone_number" required />
                        
                            {(userData.phone_number.length > 10) && <p className="w-25 ms-4 pt-1" >Enter valid phone_number</p>}
                        </div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email id </label>
                        <input name="email" value={email} type="email" onChange={e => OnChange(e)} className="form-control" id="email" required />
                    </div>

                    {(Object.keys(valid).length === 0 &&
                    <div className="mb-3 d-flex">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    )}
                </form>

            </div>
            
        </div>
    )
}

export default FormValidation

