import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getAllUsers } from "./features/auth";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <h1>Loop kitchen</h1>
      <NavigationRoutes/>
    </div>
  );
}

export default App;
