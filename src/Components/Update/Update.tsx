import React from "react";
import { useParams } from "react-router";

function Update() {
  const { id } = useParams();

  let getLocalData = JSON.parse(localStorage.getItem("fetchdata") || "true");

  let singleData = getLocalData?.find((item: any) => {
    return item.ccn3 === id;
  });
  console.log(singleData, "singleData ");




  return (
    <div className="w-100 pt-3 d-flex justify-content-center">
      <div className="bg-light mt-5 pt-4 w-50 pb-4">
        <div className="text-center mt-3 mb-3 pb-3">
          <h1>Update Country</h1>
        </div>
        <div>
          <div className="container border shadow p-5 w-50 mt-3">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <hr className="m-0" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Common Name
                </label>
                <div className="d-flex">
                  <input type="text" placeholder="Common Name" className=" w-100 p-1"  /> 
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Official Name
                </label>
                <div className="d-flex">
                  <input type="text" placeholder="Official Name" className=" w-100 p-1" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Population</label>
                <hr className="m-0" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Number
                </label>
                <div className="d-flex">
                  <input type="text" placeholder="" className=" w-100 p-1" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Area</label>
                <hr className="m-0" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Area
                </label>
                <div className="d-flex">
                  <input type="text" placeholder="" className=" w-100 p-1" />
                </div>
              </div>

              <div className="mb-3 mt-4 d-flex ms-auto">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
