import React, { useState } from "react";
import "./style.css";
const HomeLoanEMI = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [emi, setEMI] = useState(0);

  const handlePrincipalChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setLoanTenure(event.target.value);
  };
  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const rateOfInterest = interestRate / 12 / 100;
    const timePeriod = loanTenure * 12;

    const emiValue =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, timePeriod)) /
      (Math.pow(1 + rateOfInterest, timePeriod) - 1);

    setEMI(emiValue.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const Reset = (e) => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTenure("");
    setDownPayment("");
    setEMI(0);
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "600",
          fontFamily: "san-serif",
          color: "black",
          marginTop: "80px",
          marginLeft: "120px",
        }}
      >
        <span className="ci">HOME LOAN EMI</span> <span>CALCULATOR</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <label>Loan Amount (₹) : </label> <br />
            <input
              type="number"
              value={loanAmount}
              onChange={handlePrincipalChange}
            />
          </div>
          <div className="container">
            <label>Interest Rate (%) :</label>
            <br />
            <input
              type="number"
              value={interestRate}
              onChange={handleRateChange}
            />
          </div>

          <div className="container">
            <label>Loan Tenure (years) :</label>
            <br />
            <input
              type="number"
              value={loanTenure}
              onChange={handleTimeChange}
            />
          </div>
          <div>
            <label>Down Payment (₹) :</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>
          <div className="btn">
            <button onClick={calculateEMI}>Calculate</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div>
          <div className="output">EMI Amount : ₹ {emi}</div>
        </div>
      </form>
    </div>
  );
};

export default HomeLoanEMI;
