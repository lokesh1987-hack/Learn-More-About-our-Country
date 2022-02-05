import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../../Actions/CountriesPageAction";
import { RootState } from "../../Reducers/index";
import Pagination from "./Pagination";

// interface userDataTypes {
//   name: string;
//   phone_number: string;
//   email: string;
// }
function Countries() {
  const [workingData, setWorkingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [type, setType] = useState("");
  const [Loading, setLoding] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // const [perPageData, setPerPageData] = useState(20);



  const dispatch = useDispatch();

  let select = useSelector((state: RootState) => {
    return state.country;
  });

  // Filter Part
  function sortingAlphaDAta(e: React.SetStateAction<string>) {
    setType(e);
    const sorted = workingData.sort((a: any, b: any) => {
      console.log("sort", a);
      const isReverse = type === "ase" ? -1 : 1;
      return isReverse * a.name.common.localeCompare(b.name.common);
    });
    setFilterData(sorted);
  }
  function sortingDAta(e: React.SetStateAction<string>, num: number) {
    setType(e);
    const sorted = workingData.sort((a: any, b: any) => {
      if (num === 1) {
        return a.population.toString().localeCompare(b.population.toString());
      } else {
        return b.population.toString().localeCompare(a.population.toString());
      }
    });
    setFilterData(sorted);
  }

  // Loading Part

  let loading = JSON.parse(localStorage.getItem("loadingStatus") || "true");

  useEffect(() => {
    if (loading === true) {
      console.log("inside select");
      localStorage.setItem("loadingStatus", JSON.stringify(select.loading));
      localStorage.setItem("fetchdata", JSON.stringify(select.country_data));
      localDataadd();
    }
  });

  useEffect(() => {
    loading === true || loading === {} ? dispatch(getData()) : localDataadd();
  }, []);

  function localDataadd() {
    let getLocalData = JSON.parse(localStorage.getItem("fetchdata") || "{}");
    let loading = JSON.parse(localStorage.getItem("loadingStatus") || "{}");
    setWorkingData(getLocalData);
    setLoding(loading);
    setFilterData(getLocalData);
  }

  // pagination

  const perPageData = 20
 
  const indexOfLastCard = currentPage * perPageData;
  const indexOfFirstCard = indexOfLastCard - perPageData;
  const currentCard = filterData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: any) =>{setCurrentPage(pageNumber)}

  // Delete part

  const Delete = (index: any) => {
    console.log(index, "index");
    const delete_task = workingData?.filter(
      (data: any) => data.name.common !== index
    );
    // console.log("delete=",delete_task)
    localStorage.setItem("fetchdata", JSON.stringify(delete_task));
    localDataadd();
  };

  return (
    <div>
      <>
        {Loading === true ? (
          <div className="text-center">
            <h1>Loading......</h1>
          </div>
        ) : (
          <div className="row text-center justify-content-center mt-3">
            <div className="dropdown text-end">
              <button
                className="btn btn-primary me-5 dropdown-toggle ms-4 mb-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter ↑ ↓
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => sortingAlphaDAta("ase")}
                  >
                    Sort By Ascending ↑
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => sortingAlphaDAta("dec")}
                  >
                    Sort By Descending ↓
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => sortingDAta("incNum", 1)}
                  >
                    Sort By Increment ↑
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => sortingDAta("decNum", 0)}
                  >
                    Sort By Decrement ↓
                  </button>
                </li>
              </ul>
            </div>

            {currentCard?.map((data: any, index: any) => {
              // console.log(data,"dataaa")
              const { name, flags, ccn3 } = data;
              const { svg } = flags;
              const { common } = name;

              // console.log(car,"dataaa")
              return (
                <div className="m-3 col-sm-2 col-md-2 p-3 shadow" key={index}>
                  <div className="card p-2 h-100 w-100">
                    <img src={svg} className="card-img-top h-50" alt="..." />
                    <div className="card-body h-50">
                      <h5 className="card-title h-50">{common}</h5>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-primary p-2"
                          onClick={() => Delete(common)}
                        >
                          Delete
                        </button>
                        <Link
                          to={`/countries/update/${ccn3}`}
                          className="btn btn-primary p-2"
                        >
                          Update
                        </Link>
                        <Link
                          to={`/countries/alldetails/${ccn3}`}
                          className="btn btn-primary p-2"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="sticky-bottom">
              <Pagination perPageData={perPageData} totalCards={filterData.length} paginate={paginate} currentPage={currentPage} />
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Countries;
