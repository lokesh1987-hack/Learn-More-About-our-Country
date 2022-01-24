import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData} from "../../Actions/CountriesPageAction";
import { RootState } from "../../Reducers/index";

// interface userDataTypes {
//   name: string;
//   phone_number: string;
//   email: string;
// }
function Countries() {

  const [workingData, setWorkingData] = useState([])
  const [Loading, setLoding] = useState(true);

  const dispatch = useDispatch();

  let select = useSelector((state: RootState) => {
    return state.country;
  });


  let loading = JSON.parse(localStorage.getItem('loadingStatus') || 'true')  

  useEffect(() => {
   if(loading === true)
   {
     console.log("inside select")
     localStorage.setItem("loadingStatus", JSON.stringify(select.loading));
     localStorage.setItem("fetchdata", JSON.stringify(select.country_data));
     localDataadd()
   }
  });



useEffect(()=>{
  (loading === true || loading === {})?dispatch(getData()):localDataadd()
},[])


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
    localDataadd()
}


 

  return (
    <div>
      <>
        {Loading === true? (
          <div className="text-center">
            <h1>Loading......</h1>
          </div>
        ) : (
          <div className="row text-center justify-content-center mt-3">
            {workingData?.map((data: any, index: any) => {
                            // console.log(data,"dataaa")
                            const {name , flags ,ccn3 } = data
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
                                                <Link to={`/countries/update/${ccn3}`} className="btn btn-primary">Update</Link>
                                                <Link to={`/countries/alldetails/${ccn3}`} className="btn btn-primary">Details</Link>
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
