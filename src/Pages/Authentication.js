import React from "react";
import classes from "./Authentication.module.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/store";

const Authentication = () => {
  const [user, setUser] = React.useState();
  const [switchToLogin, setSwitchToLogin] = React.useState(false);
  const [avatar, setAvatar] = React.useState();
  const nameInputRef = React.useRef();
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const confirmPasswordInputRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  React.useEffect(() => {
    if (user) {
      fetch("https://nostra-app-server-side.onrender.com/add-user-google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          picture: user.picture,
        }),
      })
        .then((response) => {
          if(response.ok){
            return response.json()
          }else{
            navigate('/login', {replace: true});
            throw new Error("error", response.status);
          }
          }).then((data) => {
            // console.log("User added to database");
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(userActions.login(data))

            navigate("/", { replace: true });
          })
        .catch((error) => {
          console.log(error);
          navigate("/login", { replace: true });
        });
    }
  }, [user]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    if (!switchToLogin) {
      formData.append("email", emailInputRef.current.value);
      formData.append("password", passwordInputRef.current.value);
      formData.append("confirmPassword", confirmPasswordInputRef.current.value);
      formData.append("name", nameInputRef.current.value);
      formData.append("avatar", avatar);

      fetch("https://nostra-app-server-side.onrender.com/add-user-email-password", {
        method: "POST",
        body: formData,
      }).then((response) =>{ 
        if(response.ok){
          return response.json()
        }else{
          navigate('/login', {replace: true});
          throw new Error("error", response.status);
        }
        }).then((data) => {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(userActions.login(data))
            navigate('/', {replace: true})
          }).catch((error) => {
        console.log(error);
      });

    } else {

      formData.append("email", emailInputRef.current.value);
      formData.append("password", passwordInputRef.current.value);

      fetch("https://nostra-app-server-side.onrender.com/login-user-email-password", {
        method: "POST",
        body: formData,
      }).then((response) =>{ 
        if(response.ok){
          return response.json()
        }else{
          navigate('/login', {replace: true});
          throw new Error("error", response.status);
        }
        }).then((data) => {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(userActions.login(data))
            navigate('/', {replace: true})
          }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.googleLoginContainer}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // console.log(credentialResponse);
            const user = jwt_decode(credentialResponse.credential);
            console.log(user);
            setUser(user);
           
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
      <form onSubmit={formSubmitHandler} className={classes.formContainer}>
        {!switchToLogin && (
          <>
            {" "}
            <label className={classes.labelElement} htmlFor="username">
              Username
            </label>
            <input
              className={classes.inputElement}
              type="text"
              placeholder="Username"
              ref={nameInputRef}
            />
          </>
        )}
        <label className={classes.labelElement} htmlFor="email">
          Email
        </label>
        <input
          className={classes.inputElement}
          type="text"
          placeholder="Email"
          ref={emailInputRef}
        />
        <label className={classes.labelElement} htmlFor="password">
          Password
        </label>
        <input
          className={classes.inputElement}
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
        {!switchToLogin && (
          <>
            {" "}
            <label className={classes.labelElement} htmlFor="password">
              Confirm Password
            </label>
            <input
              className={classes.inputElement}
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordInputRef}
            />
          </>
        )}
        {!switchToLogin && (
          <>
            <label className={classes.labelElement} htmlFor="avatar">
              Avatar
            </label>
            <input
              type="file"
              placeholder="Avatar"
              onChange={(e) => {
                setAvatar(e.target.files[0]);
                // console.log(e.target.files[0]);
              }}
            />
          </>
        )}
        <button className={classes.buttonElement} type="submit">
          {!switchToLogin ? "Register": "Login"}
        </button>
      </form>
      {!switchToLogin && (
        <div className={classes.switchToLoginContainer}>
          <p className={classes.switchToLoginText}>Already have an account?</p>
          <button
            className={classes.switchToLoginButton}
            onClick={() => setSwitchToLogin(!switchToLogin)}
          >
            Login
          </button>
        </div>
      )}
      {switchToLogin && (
        <div className={classes.switchToLoginContainer}>
          <p className={classes.switchToLoginText}>Don't have an account?</p>
          <button
            className={classes.switchToLoginButton}
            onClick={() => setSwitchToLogin(!switchToLogin)}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
