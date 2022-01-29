import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Reducers/index";
import { Link } from "react-router-dom";

interface userDataTypes {
  name: string;
  phone_number: string;
  email: string;
}

function ThanksPage() {
  const [userDetails, setUserDetails] = useState<any>();

  let select = useSelector((state: RootState) => {
    return state.contact;
  });

  useEffect(() => {
    landingPage();
  }, []);

  const landingPage = () => {
    setUserDetails(select.contact_data);
  };
  console.log(userDetails);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "93vh" }}
    >
      <div className=" w-25">
        <div className="container border shadow bg-light">
          <div className="mt-4 text-center">
            <p className="h1">Thanks For Contact Us</p>
          </div>
          <hr />
          <div>
            {userDetails?.map((user: any, index: any) => {
              return (
                <div key={index} className="ms-4 text-start">
                  <p className="h5">Name : {user.name}</p>
                  <p className="h5">email : {user.email} </p>
                  <p className="h5">number : {user.phone_number}</p>
                </div>
              );
            })}
          </div>
          <div className="m-4 ms-5">
              <Link to="/" className="btn btn-success" >Back</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;
