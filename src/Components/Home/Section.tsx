import React from "react";

function Section() {
  return (
    <div className="container mt-4">
      <div></div>

      <div className="card mb-3 w-100 p-4 bg-success">
        <div className="row g-0 p-3">
          <div className="col-md-6  shadow">
            <img
              src={
                "https://raw.githubusercontent.com/lokesh1987-hack/try/main/undraw%20pics/undraw_World_re_768g.png?token=GHSAT0AAAAAABQGE2WC4V6NL3DKF5S5O3BCYPPTJUA"
              }
              className="w-100 shadow p-4 pe-0"
              alt="Image Not Found"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body  p-5 bg-light h-100">
              <h5 className="card-title h1 mt-5">About WOrld</h5>
              <p className="card-text p">
              "The world is full of strange phenomena that cannot be explained by the laws of logic or science. Dennis Rodman is only one example.".
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row align-items-start">
          <div className="col-sm-12 col-md-3">One of three columns</div>
          <div className="col-sm-12 col-md-3">Ondmde of three columns</div>
          <div className="col-sm-12 col-md-3">One of three columns</div>
          <div className="col-sm-12 col-md-3">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

export default Section;
