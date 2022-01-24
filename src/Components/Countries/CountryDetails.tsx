
import { Link, useParams } from "react-router-dom";



function CountryDetails() {
  const { id } = useParams();
 
  let getLocalData = JSON.parse(localStorage.getItem("fetchdata") || "true");

  let singleData = getLocalData?.find((item: any)=>{return(item.ccn3 === id)});
  console.log(singleData, "singleData ");

  

  return (
    <div className="container text-center justify-content-center mt-5 w-50 bg-light p-5">
      <div className="container shadow border p-2 w-50 " >
        <img src={singleData.flags.svg} className="card-img-top" alt="..." />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className=" w-100">
          <div className="container border shadow bg-light">
            <div className="mt-4 text-center">
              <p className="h3 ">{singleData.name.common}</p>
            </div>
            <hr />

            <div>
              <div className="ms-5 text-start">
                <p className="h5 ps-0">Name </p>
                <hr />
                <p className="p">Common Name : {singleData.name.common}</p>
                <p className="p">Official Name : {singleData.name.common} </p>
                {console.log(singleData.capital)}

                <p className="p">Capital :{(singleData.capital)?singleData.capital?.map((capital: any)=>(<span>{capital}</span>)):<span>Not Defined</span>} </p>
              </div>
              <div className="ms-5 text-start">
                <hr />
                <p className="h5 ps-0">Other </p>
                <hr />
                <p className="p">Population : {singleData.population}</p>
                <p className="p">Region : {singleData.region} </p>
                <p className="p">Start Of Week : {singleData.startOfWeek}</p>
                <p className="p">Status : {singleData.status}</p>
                <p className="p">TimeZone : {singleData.timezones}</p>
                <p className="p">
                  Alternate Spellings : {`${singleData.altSpellings}`}
                </p>
                <p className="p">Area : {singleData.area}</p>
                <p className="p">Continents : {singleData.continents}</p>
                <p className="p">Flag : {singleData.flag}</p>
              </div>
              <div className="ms-5 text-start">
                <hr />
                <p className="h5 ps-0">Cars </p>
                <hr />
                <p className="p">Car Side : {singleData.car.side}</p>
                <p className="p">Sign : {singleData.car.sign}</p>
                <p className="p">cca2 : {singleData.cca2}</p>
                <p className="p">cca3 : {singleData.cca3}</p>
                <p className="p">ccn3 : {singleData.ccn3}</p>
              </div>
              <div className="ms-5 text-start">
                <hr />
                <p className="h5 ps-0">Idd</p>
                <hr />
                <p className="p">Root : {(singleData.idd.root)?singleData.idd.root:<span>Not Defind</span>}</p>
                <p className="p">Suffixes : {(singleData.idd.root)?singleData.idd.suffixes:<span>Not Defined</span>}</p>
                <p className="p">Independent : {singleData.independent}</p>
                <p className="p">landlocked : {singleData.landlocked}</p>
                <p>Languages :{Object.keys(singleData.languages).map((key) =><span> ( {singleData.languages[key]} )</span>)}</p>
              </div>
              <div className="ms-5 text-start">
                <hr />
                  <p className="h5 ps-0">Translations </p>
                <hr />
                <div className="row">
                  {Object.keys(singleData.translations).map((key, index) => {
                    
                    return (
                      <div className="m-4 col-sm-3">
                        <p className="h3">{key}</p>
                        <p>Official :{singleData.translations[key].official}</p>
                        <p>Common :{singleData.translations[key].common}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ms-5 text-start">
                <hr />
                  <p className="h5 ps-0">Border Countries </p>
                <hr />
                <div className="row">
                  {(singleData.border)?singleData.borders?.map((country: any) => {
                    
                    return (
                      <div className="m-4 col-sm-3">
                        <p className="h3">{country}</p>
                      </div>
                    );
                  }):<p className="h1">No border Country </p> 
                  }

                </div>
              </div>

            </div>
            <div className="m-5">
              <Link to="/countries" className="btn btn-success" >Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
