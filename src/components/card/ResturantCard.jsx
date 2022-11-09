import { useDispatch, useSelector } from "react-redux";
import "../card/card.css";
import { addToBookMark, removeFromBookMark } from "../../slices/bookMarkSlice";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
export const ResturantCard = ({ item }) => {
  const dispatch = useDispatch();
  const { allBookMarks } = useSelector((store) => store.bookmark);
  console.log(allBookMarks, "all bookmarks");
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

      <div>
        <h3>{item.name || item}</h3>
        {/* {allBookMarks.filter(data => data === item.name || item) ? (
          <button
            onClick={() =>
              dispatch(removeFromBookMark({ restaurantName: item.name }))
            }
          >
            remove bookmark
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(addToBookMark({ restaurantName: item.name }))
            }
          >
           
            bookmark
          </button>
        )} */}

        <button
          onClick={() =>
            dispatch(removeFromBookMark({ restaurantName: item.name }))
          }
        >
          remove bookmark
        </button>
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
