import { useSelector } from "react-redux";
import { ResturantCard } from "../card/ResturantCard";

const BookMark = () => {
  const { allBookMarks } = useSelector((store) => store.bookmark);
  return (
    <div>
      bookmarks
      {allBookMarks ? (
        allBookMarks.map((item) => {
          return <ResturantCard item={item} />;
        })
      ) : (
        ""
      )}
      {allBookMarks.length === 0 ? <p>No Bookmarks Added</p>:""}
    </div>
  );
};
export { BookMark };
