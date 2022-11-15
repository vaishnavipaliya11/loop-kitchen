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
      <div className="home-input">
        <label>
          <input 
            placeholder="Enter the name of resturant"
            onChange={(e) => findResturant(e)}
            className="resturant-input"
          />
        </label>
      </div>

      {resturantsMatched? (
        <div className="resturant-matched-container common-col">
          {resturantsMatched.map((item, index) => {
            return (
              <p
                className="rest-options"
                onClick={() => {
                  dispatch(addToSelectedRestaurant({ name: item.Name }));
                  setResturantsMatched("");
                }}
              >
                {item.Name}
              </p>
            );
          })}
        </div>
      ) :""}

      <div className="matched-restaurants">
        {selectedRes
          ? selectedRes.map(({name}) => {
              return <ResturantCard item={name} />;
            })
          : ""}
      </div>
    </div>
  );
};
export { Home };
