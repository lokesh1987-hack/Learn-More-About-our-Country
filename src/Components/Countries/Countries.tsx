import { loadavg } from "os";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import thunk from "redux-thunk";
import { getData, addCountry } from "../../Actions/CountriesPageAction";
import { RootState } from "../../Reducers/index";

interface userDataTypes {
  name: string;
  phone_number: string;
  email: string;
}
function Countries() {
  const [fetchData, setFetchData] = useState([]);
  const [workingData, setWorkingData] = useState([])
  const [Loading, setLoding] = useState(true);

  const dispatch = useDispatch();

  let select = useSelector((state: RootState) => {
    return state.country;
  });

//   useEffect(() => {
//     dispatch(getData());
//     fetchingData();
//   },[]);


//   useEffect(() => {
//     Checkdata()
//   });

//   const fetchingData = () => {
//     setFetchData(select.country_data);
//     setLoding(select.loading);
//     console.log(fetchData,Loading)

//   };

//    function Checkdata() {
//     setLoding(false)
//     localStorage.setItem("loadingStatus", JSON.stringify(Loading));
//     localStorage.setItem("fetchdata", JSON.stringify(fetchData));
//     let fetchdata: any = JSON.parse(localStorage.getItem('fetchdata') || '{}');
//     console.log("data",fetchdata)
//     setWorkingData(fetchData)
//     console.log(workingData,"work")
// }
useEffect(()=>{
    localDataadd()
},[workingData])


function localDataadd(){
    let getLocalData = JSON.parse(localStorage.getItem('fetchdata') || '{}')
    let loading = JSON.parse(localStorage.getItem('loadingStatus') || '{}')
    setWorkingData(getLocalData)
    setLoding(loading)
}

const Delete = (index: any)=>{    
    console.log(index,"index")
    const delete_task = workingData?.filter((data: any)=> data.name.common !== index)
    console.log("delete=",delete_task)
    localStorage.setItem("fetchdata",JSON.stringify(delete_task))
}


 

  return (
    <div>
      {/* <div>

                <input className="input" type="text" value={newData} onChange={(e) => setNewData(e.target.value)} />
                <button type="submit" onClick={() => dispatch(addCountry({ newData }))} >Submit</button>

            </div> */}
      <>
        {Loading === true? (
          <div className="text-center">
            <h1>Loading......</h1>
          </div>
        ) : (
          <div className="row text-center justify-content-center mt-3">
            {workingData?.map((data: any, index: any) => {
                            console.log(data,"dataaa")
                            const {name , flags ,car } = data
                            const { svg } = flags
                            const { common } = name
                            // console.log(car,"dataaa")
                            return (
                                <div className="m-3 col-sm-2 col-md-2 p-3 shadow" key={index}>
                                    <div className="card p-2 h-100 w-100">
                                        <img src={svg} className="card-img-top h-50" alt="..." />
                                        <div className="card-body h-50">
                                            <h5 className="card-title h-50">{common}</h5>
                                            <div className="d-flex justify-content-between">
                                                <button className="btn btn-primary" onClick={()=>Delete(common)} >Delete</button>
                                                <Link to={`/countries/alldetails/${[index]}`} className="btn btn-primary">Details</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
          </div>
        )}
      </>
    </div>
  );
}

export default Countries;
