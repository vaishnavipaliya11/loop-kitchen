import { useDispatch } from "react-redux";
import "../card/card.css";
import { addToBookMark } from "../../slices/bookMarkSlice";
export const ResturantCard = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <iframe
        width="200"
        height="200"
        src="https://datastudio.google.com/u/0/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC"
        frameBorder="0"
        style={{ border: "0" }}
        allowfullscreen
      ></iframe>
      <h3>{item.name || item}</h3>
      <div>
        <button
          onClick={() => dispatch(addToBookMark({ restaurantName: item.name }))}
        >
          bookmark
        </button>
        <button>delete</button>
      </div>
    </div>
  );
};
