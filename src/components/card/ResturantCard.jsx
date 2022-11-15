import { useDispatch, useSelector } from "react-redux";
import "../card/card.css";
import "../../styles.css";
import { addToBookMark, removeFromBookMark } from "../../slices/bookMarkSlice";
import { deleteFromSelectedRestaurant } from "../../slices/restaurantSlice";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
export const ResturantCard = ({ item }) => {
  const dispatch = useDispatch();
  const { allBookMarks } = useSelector((store) => store.bookmark);
  // console.log(allBookMarks, "card");
  // console.log(item, "item");
  return (
    <div className="card-container">
      <iframe
        width="200"
        height="150"
        src="https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <div className="card-details">
        <div>{item.name || item}</div>
        <div>
          {allBookMarks.find((data) => data === item || item.name) ? (
            <button
              className="card-btns"
              onClick={() =>
                dispatch(removeFromBookMark({ restaurantName: item.name || item }))
              }
            >
              <BsFillBookmarkFill />
            </button>
          ) : (
            <button
              className="card-btns"
              onClick={() =>
                dispatch(addToBookMark({ restaurantName: item.name || item }))
              }
            >
              <BsBookmark />
            </button>
          )}

          <button
            className="card-btns"
            onClick={() =>
              dispatch(
                deleteFromSelectedRestaurant({ restaurantName: item.name || item})
              )
            }
          >
            <RiDeleteBin6Fill style={{ fontSize: "1rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
};
