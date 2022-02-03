import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-regular";

const FormRegistration = () => {
  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  const validUserName =/\s/g;

  const [FormRegist, setFormRegist] = useState({
    name: "esraa",
    userName: "esraa_bahaa",
    email: "esraa_bahaa@gmail.com",
    password: "",
    confirmPassword: "",
  });

  const [FormRegistErrors, setFormRegistErrors] = useState({
    nameErr: null,
    userNameErr: null,
    emailErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e) => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormRegist);
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setFormRegist({
        ...FormRegist,
        email: e.target.value,
      });

      setFormRegistErrors({
        ...FormRegistErrors,
        emailErr:
          e.target.value.length === 0
            ? "This Field is required"
            : !validEmail.test(e.target.value)
            ? "The formate is must be email formated"
            : null
      });
    } else if (e.target.name === "password") {
      setFormRegist({
        ...FormRegist,
        password: e.target.value,
      });
      setFormRegistErrors({
        ...FormRegistErrors,
        passwordErr:
          e.target.value.length === 0
            ? "This Field is required"
            : !validPassword.test(e.target.value)
            ? `password length not less than 8 characters , contains at least one
               lowercase , one uppercase , at least one digit and special character`
            : null
      });
    } 
    else if (e.target.name === "userName") {
      setFormRegist({
        ...FormRegist,
        userName: e.target.value,
      });

      setFormRegistErrors({
        ...FormRegistErrors,
        userNameErr:
          e.target.value.length === 0
            ? "This Field is required"
            : validUserName.test(e.target.value)
            ? "user Name  must not have spaces"
            : null
      });
    } 
   
     else if (e.target.name === "password2") {
      setFormRegist({
        ...FormRegist,
        confirmPassword: e.target.value,
      });
      setFormRegistErrors({
        ...FormRegistErrors,
        confirmPasswordErr:
          e.target.value === FormRegist.password
            ? "confirmed password"
            : "password does not match",
      });
    }
  };

  return (
    <div className="container border border-dark p-5 my-1">
      <h1>Form Regestration</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-75">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
            value={FormRegist.name}
            onChange={(e) => handleChange(e)}
            id="exampleInputName1"
            aria-describedby="nameHelp"
          />

          <label htmlFor="exampleInputEmail1" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            value={FormRegist.email}
            onChange={(e) => handleChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div>
            <small className="text-danger">{FormRegistErrors.emailErr}</small>
          </div>

          <label htmlFor="exampleInputName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="userName"
            value={FormRegist.userName}
            onChange={(e) => handleChange(e)}
            id="exampleInputuserName1"
            aria-describedby="userNameHelp"
          />
          <small className="text-danger">{FormRegistErrors.userNameErr}</small>
          <br />
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
              value={FormRegist.password}
              id="exampleInputPassword1"
            />
          </div>
          <div className="col-2">
            <FontAwesomeIcon
              icon={passwordShown ? faEye : faEyeSlash}
              onClick={togglePassword}
              className="mt-3"
            ></FontAwesomeIcon>
          </div>
        </div>
        <small className="text-danger">{FormRegistErrors.passwordErr}</small>
        <br />

        <label htmlFor="exampleInputPassword2" className="form-label ">
          Confirm Password
        </label>
        <input
          type="password"
          name="password2"
          className="form-control"
          placeholder=""
          onChange={(e) => handleChange(e)}
          value={FormRegist.confirmPassword}
          id="exampleInputPassword2"
        />

        <small className="text-danger">
          {FormRegistErrors.confirmPasswordErr}
        </small>
        <br />

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormRegistration;
