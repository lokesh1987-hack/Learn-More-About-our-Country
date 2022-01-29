import React from "react";


function Footer() {
  return (
    <div>
      <div className="row align-items-center bg-dark text-light p-3 text-center m-3 mt-5 rounded">
        <div className="col-sm-12 col-md-4 p-1 shadow">
          <h3 className="border p-3" >World DAta</h3>
        </div>
        <div className="col-sm-12 col-md-4 p-1">
          <h2>Latest Update</h2>
          <ul style={{listStyle:"none"}}>
            <li>We can Update any Country details</li>
            <li>Now, you can Contact as using contact form</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 p-1">
          <h2>Contact</h2>
          <ul style={{listStyle:"none"}}>
            <li>Nicholas R. Drew 1451 </li>
            <li>Watson Street Hammonton,</li>
            <li>NJ 08037</li>
            <li>Email Address: NicholasRDrew@rhyta.com</li>
            <li>Phone: 609-704-7428</li>
          </ul>
        </div>
        {/* <div className="col-sm-12 col-md-3 p-1">One of three columns</div> */}
      </div>
    </div>
  );
}

export default Footer;
