import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checklogin,
  userNameHandler,
  passwordHandler,
} from "../../slices/authSlice";
import "./login.css";
import "../../styles.css";
import { getAllUsers } from "../../features/auth";
const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { availableUserData, authUserDetails } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const btnHandler = () => {
    const loggedUser = availableUserData.find(
      (item) =>
        item.username === authUserDetails.username &&
        item.password === authUserDetails.password
    )
      ? dispatch(checklogin())
      : setErrorMsg("Invalid username or password");
  };

  return (
    <div className="main-container">
      <div className="login-card common-row">
        <h2>Sign In</h2>

        <label>
          <input
            placeholder="Enter your username"
            name="username"
            required
            className="login-input"
            onChange={(e) => dispatch(userNameHandler(e.target.value))}
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className="login-input"
            onChange={(e) => dispatch(passwordHandler(e.target.value))}
          />
        </label>
        <button onClick={() => btnHandler()} className="login-btn">
          Login
        </button>
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
};
export { Login };
