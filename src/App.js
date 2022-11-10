import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { getAllUsers } from "./features/auth";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {

  const { isAuth } = useSelector((store) => store.auth);


  return (
    <div className="App">
      <NavigationRoutes />
    </div>
  );
}

export default App;
