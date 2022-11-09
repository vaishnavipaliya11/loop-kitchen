import "../card/card.css";
export const ResturantCard = ({ item }) => {
  console.log(item.name);
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
      <h3>{item.name}</h3>
      <div>
        <button>bookmark</button>
        <button>delete</button>
      </div>
    </div>
  );
};
