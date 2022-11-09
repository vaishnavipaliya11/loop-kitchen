import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResturants } from "../../features/auth/helpers/getAllResturants";
import { addToSelectedRestaurant } from "../../slices/restaurantSlice";
import { ResturantCard } from "../card/ResturantCard";
import "../home/home.css";
const Home = () => {
  const [resturantsMatched, setResturantsMatched] = useState([]);
  const dispatch = useDispatch();
  const { allResturantsData, selectedRes } = useSelector(
    (store) => store.resturants
  );

  useEffect(() => {
    dispatch(getAllResturants());
  }, []);

  const findResturant = (e) => {
    const userInput = e.target.value;
    let filteredResturant = allResturantsData.filter((item) =>
      item.Name.toLowerCase().includes(userInput.toLowerCase())
    );
    setResturantsMatched(filteredResturant);
  };

  return (
    <div className="home-container">
      <label>
        <input
          placeholder="Enter the name of resturant"
          onChange={(e) => findResturant(e)}
          className="resturant-input"
        />
      </label>

      <div>
        {resturantsMatched &&
          resturantsMatched.map((item, index) => {
            return (
              <div>
                <p
                  onClick={() =>
                    dispatch(addToSelectedRestaurant({ name: item.Name }))
                  }
                >
                  {item.Name}
                </p>
              </div>
            );
          })}
      </div>
      {selectedRes
        ? selectedRes.map((item) => {
            return <ResturantCard data={item} />;
          })
        : ""}
    </div>
  );
};
export { Home };
