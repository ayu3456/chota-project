import React from "react";
import "./Header.css";


const Header1 = () => {

  function MyButton() {
    const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      color: '#2563eb', 
      border: '1px solid #2563eb',
      borderRadius: '9999px',
      padding: '8px 16px',
    };
  

    return (
      <button style={buttonStyle}>
      Login / Register
    </button>
    );
  }

  return (
    <div>
      <div className="header1">
        <div className="logo">goibibo</div>
        <MyButton />
      </div>

      <div className="header2">
        <div className="input1">
          <input type="text" placeholder="GOA" />
        </div>
        <div className="input2">
          <button className="btn2">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header1;