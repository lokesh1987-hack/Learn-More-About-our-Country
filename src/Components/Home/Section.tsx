import React from "react";
import firstImage  from '../../Asserts/learn.png'
import secondImage  from '../../Asserts/Sorting.png'
import thirdImage  from '../../Asserts/Add_tasks.png'
import forthImage  from '../../Asserts/world.png'

function Section() {
  return (
    <div className="container mt-4 bg-light mt-5">
      <div></div>

      <div className="card mb-3 w-100 p-4 mb-5 bg-light shadow">
        <div className="row g-0 p-3">
          <div className="col-md-6  shadow">
            <img
              src={firstImage}
              className="w-100 shadow p-4 pe-0"
              alt="Image Not Found"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body  p-5 bg-light h-100">
              <h5 className="card-title h1 mt-5">Learning</h5>
              <p className="card-text p-2 p">
              " World DAta Web help you to learn about our countries with some basic information of world.".
              </p>
          
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 w-100 mt-5 p-4 bg-success ">
        <div className="row g-0 p-3">
         
          <div className="col-md-6">
            <div className="card-body  p-5 bg-light h-100">
              <h5 className="card-title h1 mt-5">Filter</h5>
              <p className="card-text p">
                1.Filter will help you to do some kind of sorting 
              </p>
              <p className="card-text p">
                2.You can sort cards by their common name (it will be ascending or decending). 
              </p>
              <p className="card-text p">
              3.one more option available thier which is You can sort cards by their Population (it will be in increament order or decreament order) 
              </p>
            
            </div>
          </div>
          <div className="col-md-6  shadow">
            <img
              src={secondImage}
              className="w-100 shadow p-4 pe-0"
              alt="Image Not Found"
            />
          </div>
        </div>
      </div>

      <div className="card mb-3 w-100 p-4 mt-5 bg-light shadow">
        <div className="row g-0 p-3">
          <div className="col-md-6  shadow">
            <img
              src={thirdImage}
              className="w-100 shadow p-4 pe-0"
              alt="Image Not Found"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body  p-5 bg-light h-100">
              <h5 className="card-title h1 mt-5">Update And Delete</h5>
              <p className="card-text p mt-2">
                <h5>Update :</h5>update is a part which will help you to update Country details according to you in your local storage.  
              </p>
              <p className="card-text p mt-2">
                <h5>Delete :</h5>Delete will used to delete any country details in your localstorage.  
              </p>
           
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 w-100 mt-5 p-4 bg-success ">
        <div className="row g-0 p-3">
         
          <div className="col-md-6">
            <div className="card-body  p-5 bg-light h-100">
              <h5 className="card-title h1 mt-5">About WOrld</h5>
              <p className="card-text p">
              "The world is full of strange phenomena that cannot be explained by the laws of logic or science. Dennis Rodman is only one example.".
              </p>
              <p className="card-text">
                {/* <small className="text-muted"></small> */}
              </p>
            </div>
          </div>
          <div className="col-md-6  shadow">
            <img
              src={forthImage}
              className="w-100 shadow p-4 pe-0"
              alt="Image Not Found"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Section;
