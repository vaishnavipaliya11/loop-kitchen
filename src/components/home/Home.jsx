import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResturants } from "../../features/auth/helpers/getAllResturants";
import { ResturantCard } from "../card/ResturantCard";

const Home = () => {
  const [resturantsMatched, setResturantsMatched] = useState([]);
  const dispatch = useDispatch();
  const { allResturantsData } = useSelector((store) => store.resturants);

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
    <div>
      <input
        placeholder="Enter the name of resturant"
        onChange={(e) => findResturant(e)}
      />

      {resturantsMatched &&
        resturantsMatched.map((item, index) => {
          return <ResturantCard key={index} item={item} />;
        })}
    </div>
  );
};
export { Home };
