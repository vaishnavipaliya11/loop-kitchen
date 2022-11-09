import "../card/card.css";
export const ResturantCard = ({ item }) => {
    console.log(item);
  return (
    <div className="card-container">
      <iframe
        width="600"
        height="450"
        src="https://datastudio.google.com/u/0/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen
      ></iframe>
      {/* <span>{item?.Name}</span> */}
    </div>
  );
};
