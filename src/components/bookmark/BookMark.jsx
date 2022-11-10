import { useSelector } from "react-redux";
import { ResturantCard } from "../card/ResturantCard";
import Cookies from "universal-cookie";
const BookMark = () => {
  const { allBookMarks } = useSelector((store) => store.bookmark);
  const cookies = new Cookies();

  cookies.set("bookmark", "${allBookMarks}", { path: "/" });
  console.log(cookies.get("myCat"));
  return (
    <div className="common-flex">
      bookmarks
      {allBookMarks
        ? allBookMarks.map((item) => {
            return <ResturantCard item={item} />;
          })
        : ""}
      {allBookMarks.length === 0 ? <p>No Bookmarks Added</p> : ""}
    </div>
  );
};
export { BookMark };
