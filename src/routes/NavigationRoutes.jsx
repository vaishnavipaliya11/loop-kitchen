import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BookMark } from "../components/bookmark/BookMark";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";

const NavigationRoutes = () => {
  const { isAuth } = useSelector((store) => store.auth);
  console.log(isAuth);
  return (
    <div>
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
  );
};
export { NavigationRoutes };
