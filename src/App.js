import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { getAllUsers } from "./features/auth";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.auth);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
        {isAuth ? <Header /> : ""}

      <NavigationRoutes />
    </div>
  );
}

export default App;
