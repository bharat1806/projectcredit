import React, { useState } from "react";
import "../components/intropage.css";
import Imagelogo from "../comimg.png";
import Ulogo from "../Ulogo.png";

export default function Intropage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [loanamount, setLoanAmount] = useState("");
  const [rproduct, setRproduct] = useState("");
  // const [mobile, setMobile] = useState("+91");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "First Name: ",
      firstname,
      "\nLast Name: ",
      lastname,
      "\nLoan Amount: ",
      loanamount,
      "\nRequired Product: ",
      rproduct
    );
  };

  // const handleClick = () => {
  //   console.log("Success");
  // };

  return (
    <div className="set">
      <div>
        <img src={Imagelogo} alt="Logo" className="logo" />
      </div>
      <div>
        <img src={Ulogo} alt="ulogo" className="ulogo" />
      </div>
      <h6 className="my-4">
        <b>USER FORM</b>
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="col my-3">
          <input
            type="text"
            className="form-control input"
            placeholder="First name"
            aria-label="First name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value.trim())}
            required
          />
        </div>
        <div className="col my-3">
          <input
            type="text"
            className="form-control input"
            placeholder="Last name"
            aria-label="Last name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="col my-4">
          <label htmlFor="inputLoanamount" className="form-label">
            <h6>
              <b>LOAN AMOUNT</b>
            </h6>
          </label>
          <select
            id="inputLoanamount"
            className="form-select form-control input"
            value={loanamount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          >
            <option defaultValue>Choose...</option>
            <option>25 - 50 Lac</option>
            <option>50 - 1Cr</option>
            <option>1 - 2Cr</option>
            <option>2Cr Above</option>
          </select>
        </div>
        <div className="col my-4">
          <label htmlFor="inputProduct" className="form-label">
            <h6>
              <b>REQUIRED PRODUCT</b>
            </h6>
          </label>
          <select
            id="inputProduct"
            className="form-select form-control input"
            value={rproduct}
            onChange={(e) => setRproduct(e.target.value)}
            required
          >
            <option defaultValue>Choose...</option>
            <option>LAP (Loan Against Property)</option>
            <option>HL (Home Loan)</option>
            <option>OD (Overdraft)</option>
            <option>CC (Cash Credit)</option>
            <option>Other</option>
          </select>
        </div>

        {/* <button
          className="button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        > */}
        <button className="button">SUBMIT</button>
        {/* 
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              Phone Verification
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div>
            <input
              type="text"
              className="form-control input w-50 mx-5"
              placeholder="Mobile Number"
              aria-label="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <button
            className="button my-3 mx-5 w-25"
            id="sign-in-button"
            onClick={handleClick}
          >
            Verify Now
          </button>
          <div className="offcanvas-body small">...</div>
        </div> */}
      </form>
    </div>
  );
}
