import React from "react";
import LoginBg from "../../../images/loginBg.png";

const Login = () => {
  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
          
        <form className="col-md-6 shadow p-5">
          <div className="mb-3">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
        </form>

        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
