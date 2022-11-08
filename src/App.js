import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllUsers } from "./features/auth";

function App() {
  const { isAuth } = useSelector((store) => store.auth);
  console.log(isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <h1>Loop kitchen</h1>
    </div>
  );
}

export default App;
