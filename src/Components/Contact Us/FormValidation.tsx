import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFormData } from '../../Actions/ContactFormAction'
import { useDispatch } from 'react-redux'


interface userDataTypes {
    name:string,
    phone_number:string,
    email:string
}
interface Error {
    phone_number?:boolean,
}

function FormValidation() {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const [userData, setUserData] = useState<userDataTypes>({
        name: "",
        phone_number: "",
        email: "",
    })



    const { name, phone_number, email } = userData;

    const OnChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const submit = (e: any) => {
        e.preventDefault()
        dispatch(getFormData(userData))
        navigate("thanks")
        

    }
    
    const valid: Error = {
        phone_number:false
    }
    

    // console.log("valid=",valid)

    return (
        
        <div>
            <div className="text-center m-5">
                <h1>Contact Us</h1>
            </div>
            <div className="container border shadow p-5 w-50">
                <form onSubmit={e => submit(e)}>
                    <div className="mb-3">
                        <label htmlFor ="name" className="form-label">First Name </label>
                        <input name="name" value={name} type="name" onChange={e => OnChange(e)} className="form-control" id="name" required />
                        {(!userData.name) && <p className="mt-2 text-danger">Required*</p> }
                        {(userData.name.length < 4) && (userData.name.length > 0) && <p className="mt-2 text-danger">Enter name greater than 4 letter</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                        <div className="d-flex">
                            <input type="number" placeholder="  + 91" className="p-2 ps-2 me-3 w-25" disabled />
                            <input name="phone_number" value={phone_number} type="number" onChange={e => OnChange(e)} className="form-control w-25" id="phone_number" required />
                            {(!userData.phone_number) && <p className=" mt-3 ms-2 h6 text-danger">Required*</p> }
                            {(userData.phone_number.length === 10 )?<p className="mt-2 ms-5 h5 text-success"> Correct ✔️{valid.phone_number = true}</p> :(userData.phone_number.length > 10  || userData.phone_number.length > 0 ) && <p className="mt-3 ms-3 h6 text-danger"> ❌ Enter Valid Number</p>}
                           
                        </div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email id </label>
                        <input name="email" value={email} type="email" onChange={e => OnChange(e)} className="form-control" id="email" required />
                    </div>

                    
                    <div className="mb-3 d-flex">
                       {(valid.phone_number)?<button type="submit" className="btn btn-primary">Submit</button>:<button type="submit" className="btn btn-primary" disabled>Submit</button> } 
                    </div>
                    
                </form>

            </div>
            
        </div>
    )
}

export default FormValidation

