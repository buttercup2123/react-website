import React from "react";
import bar from "../../images/side.png";

const signupContainerStyle = {
  width: "100%",
  height: "90vh",
  display: "flex",
};

const leftSideStyle = {
  height: "100%",
  flex: "50%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const rightSideStyle = {
  height: "100%",
  flex: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const h1Style = {
  fontFamily:
    "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
  fontWeight: 10,
  fontSize: "50px",
  marginLeft: "30px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "auto",
  padding: "30px",
};

const inputStyle = {
  height: "40px",
  width: "80%",
  border: "none",
  borderBottom: "1px solid #121619",
  color: "black",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "140px",
  height: "40px",
  border: "none",
  backgroundColor: "#121619",
  color: "whitesmoke",
  fontSize: "15px",
  cursor: "pointer",
  marginTop: "15px",
};

function SignUp() {
  return (
    <div style={signupContainerStyle}>
      <div
        className="leftSide"
        style={{ ...leftSideStyle, backgroundImage: `url(${bar})` }}
      ></div>
      <div style={rightSideStyle}>
        <h1 style={h1Style}>Sign Up</h1>

        <form id="signup-form" method="POST" style={formStyle}>
          <label htmlFor="name" style={inputStyle}>
            Full Name
          </label>
          <input name="name" placeholder="Enter full name..." type="text" style={inputStyle} />
          <label htmlFor="email" style={inputStyle}>
            Email
          </label>
          <input name="email" placeholder="Enter email..." type="email" style={inputStyle} />
          <label htmlFor="password" style={inputStyle}>
            Password
          </label>
          <input name="password" type="password" placeholder="Enter password..." style={inputStyle} />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
