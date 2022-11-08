import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResturants } from "../../features/auth/helpers/getAllResturants";

const Home = () => {
  const [resturantsMatched, setResturantsMatched] = useState([]);
  const dispatch = useDispatch();
  const { allResturantsData } = useSelector((store) => store.resturants);
  console.log(allResturantsData,"all");
  useEffect(() => {
    dispatch(getAllResturants());
  }, []);
  const findResturant = (e) => {
    const userInput = e.target.value;
    console.log(userInput);
    let filteredResturant = allResturantsData.filter((item) =>
      item.Name.toLowerCase().includes(userInput.toLowerCase())
    );
    setResturantsMatched(filteredResturant);
  };
  console.log(resturantsMatched);
  return (
    <div>
      <input
        placeholder="Enter the name of resturant"
        onChange={(e) => findResturant(e)}
      />

      {/* {resturantsMatched &&
        resturantsMatched.map((item, index) => {
          return <div>{item}</div>;
        })} */}
    </div>
  );
};
export { Home };
