import { useSelector } from "react-redux";
import { ResturantCard } from "../card/ResturantCard";

const BookMark = () => {
  const { allBookMarks } = useSelector((store) => store.bookmark);
  return (
    <div>
      <h3>Bookmarks</h3>
      <div className="common-flex">
        <div className="common-flex">
          {allBookMarks
            ? allBookMarks.map((item) => {
                return <ResturantCard item={item} />;
              })
            : ""}
        </div>

        {allBookMarks.length === 0 ? <p>No Bookmarks Added</p> : ""}
      </div>
    </div>
  );
};
export { BookMark };
