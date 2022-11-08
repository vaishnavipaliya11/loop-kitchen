import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BookMark } from "../components/bookmark/BookMark";
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { SideBar } from "../components/sidebar/SideBar";

const NavigationRoutes = () => {
  const { isAuth } = useSelector((store) => store.auth);
  return (
    <div>
      {isAuth ? <Header /> : ""}

      <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-around"}}>
      <div>
        {isAuth ? <SideBar /> : ""}
        </div>
        <Routes>
          {!isAuth ? (
            <>
              <Route path="/" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<BookMark />} />
            </>
          )}
        </Routes>
        
      </div>

    </div>
  );
};
export { NavigationRoutes };
