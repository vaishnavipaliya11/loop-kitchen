import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checklogin,
  userNameHandler,
  passwordHandler,
} from "../../slices/authSlice";
const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { availableUserData, authUserDetails } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();

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
    <div className="login-container">
      <h1>Login Page</h1>

      <label>
        <input
          placeholder="Enter your username"
          name="username"
          required
          onChange={(e) => dispatch(userNameHandler(e.target.value))}
        />
      </label>
      <label>
        <input
          name="password"
          placeholder="Enter your password"
          required
          onChange={(e) => dispatch(passwordHandler(e.target.value))}
        />
      </label>
      <button onClick={() => btnHandler()}>Login</button>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};
export { Login };
