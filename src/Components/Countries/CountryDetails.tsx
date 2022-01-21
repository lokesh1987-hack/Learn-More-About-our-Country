import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Reducers/index";

interface userDataTypes {
  name: string;
  phone_number: string;
  email: string;
}

function CountryDetails() {
  const index: any = useParams();
  console.log("NAME = ", index.id);
  const [storedData, setStoredData] = useState<any>();
  const [SingleCountryData, setSingleCountryData] = useState();

  // useEffect(() => {
  //   landingPage();
  // },[])

  //   console.log("select",select)
  let getLocalData = JSON.parse(localStorage.getItem("fetchdata") || "{}");

  let singleData = getLocalData[`${index.id}`];

  // const landingPage = () => {
  //   let getLocalData = JSON.parse(localStorage.getItem('fetchdata') || '{}')

  //   let singleData = getLocalData[`${index.id}`]
  //   setSingleCountryData(singleData)

  // };

  // const loadSingleCountry = () =>{
  //   const singleCountryDetail = storedData?.find((data: any)=>{
  //       console.log(data.name.common)
  //       return (data.name.common == name)? true :false
  //   })
  //   return singleCountryDetail
  // }

  // const {common} = name
  const url  = singleData.maps.googleMaps + "&output=embed";

  return (
    <div className="container text-center justify-content-center mt-3 w-100">
      <div className="container text-center justify-content-center shadow border p-2">
        <div className="w-50 justify-content-center">
          <img src={singleData.flags.svg} className="card-img-top" alt="..." />
        </div>
        <div>
        <iframe width="560" height="315"  src={url}  allowFullScreen></iframe>

        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
