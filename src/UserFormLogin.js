import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-regular";

const UserFormLogin = () => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*[A-Za-z])[A-Za-zd]{8,}$");

  const [userFormLogin, setUserFormLogin] = useState({
    email: "esraa_bahaa@gmail.com",
    password: "",
  });

  const [userFormLoginErrors, setUserFormLoginErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e) => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userFormLogin);
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUserFormLogin({
        ...userFormLogin,
        email: e.target.value,
      });

      setUserFormLoginErrors({
        ...userFormLoginErrors,
        emailErr:
          e.target.value.length === 0
            ? "This Field is required"
            : !validEmail.test(e.target.value)
            ? "The formate is must be email formated"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserFormLogin({
        ...userFormLogin,
        password: e.target.value,
      });
      setUserFormLoginErrors({
        ...userFormLoginErrors,
        passwordErr:
          e.target.value.length === 0
            ? "This Field is required"
            : !validPassword.test(e.target.value.length)
            ? "Length must be at least 8 character"
            : null,
      });
    }
  };

  return (
    <div className="container border border-dark p-5 ">
      <h1> Login Form</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-75">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            value={userFormLogin.email}
            onChange={(e) => handleChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div>
            <small className="text-danger">
              {userFormLoginErrors.emailErr}
            </small>
          </div>
        </div>
        <label htmlFor="exampleInputPassword1" className="form-label ">
              Password
            </label>
        <div className="mb-3 d-flex justify-content-between">
          <div className="col-9">
     
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder=""
              onChange={(e) => handleChange(e)}
              value={userFormLogin.password}
              id="exampleInputPassword1"
            />
          </div>
          <div className="col-2">
            <FontAwesomeIcon
              icon={passwordShown? faEye : faEyeSlash}
              onClick={togglePassword}
              className="mt-3"
            ></FontAwesomeIcon>
          </div>
        </div>
        <small className="text-danger">{userFormLoginErrors.passwordErr}</small>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserFormLogin;
