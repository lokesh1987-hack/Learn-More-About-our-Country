import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updatedData, setUpdatedData] = useState({
    common_name: "",
    official_name: "",
    population: "",
    area: "",
  });

  const { common_name, official_name, population, area } = updatedData;

  useEffect(() => {
    landingPage();
  }, []);

  const landingPage = () => {
    let getLocalData = JSON.parse(localStorage.getItem("fetchdata") || "true");

    let singleData = getLocalData?.find((item: any) => {
      if (item.ccn3 === id) return item;
    });

    const { name, population, area } = singleData;
    const { common, official } = name;
    // console.log(common, "ddd");

    let data = { common_name, official_name, population, area };
    data.common_name = common;
    data.official_name = official;
    data.population = population;
    data.area = area;

    setUpdatedData(data)

  };

  // console.log(getLocalData, "singleData ");

  const onChange = (e: any) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    let getLocalData = JSON.parse(localStorage.getItem("fetchdata") || "true");
    console.log(getLocalData);

    const { common_name, official_name, area, population } = updatedData;

    for (const obj of getLocalData) {
      if (obj.ccn3 === id) {
        obj.name.common = common_name;
        obj.name.official = official_name;
        obj.population = population;
        obj.area = area;
        break;
      }
    }
    navigate("/countries");
    localStorage.setItem("fetchdata", JSON.stringify(getLocalData));
  };

  return (
    <div className="w-100 pt-3 d-flex justify-content-center">
      <div className="bg-light mt-5 pt-4 w-50 pb-4">
        <div className="text-center mt-3 mb-3 pb-3">
          <h1>Update Country</h1>
        </div>
        <div>
          <div className="container border shadow p-5 w-50 mt-3">
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <hr className="m-0" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Common Name
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    onChange={(e) => onChange(e)}
                    value={common_name}
                    name="common_name"
                    placeholder="Common Name"
                    className=" w-100 p-1"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Official Name
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    value={official_name}
                    placeholder="Official Name"
                    className=" w-100 p-1"
                    onChange={(e) => onChange(e)}
                    name="official_name"
                  />
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
                  <input
                    type="number"
                    value={population}
                    onChange={(e) => onChange(e)}
                    name="population"
                    placeholder=""
                    className=" w-100 p-1"
                  />
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
                  <input
                    type="number"
                    value={area}
                    placeholder=""
                    onChange={(e) => onChange(e)}
                    name="area"
                    className=" w-100 p-1"
                  />
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
