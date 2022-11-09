import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BookMark } from "../components/bookmark/BookMark";
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { SideBar } from "../components/sidebar/SideBar";
import "../styles.css";
const NavigationRoutes = () => {
  const { isAuth } = useSelector((store) => store.auth);
  return (
    <div className="common-flex main-layout">
      <>
        {!isAuth ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <div className="parent-layout">
            <Header />
            <div className="home-layout">
              <div>
                <SideBar />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bookmark" element={<BookMark />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export { NavigationRoutes };
