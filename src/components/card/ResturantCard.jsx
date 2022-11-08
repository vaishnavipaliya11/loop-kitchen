import "../card/card.css"
export const ResturantCard = ({item}) =>{
    console.log(item);
    return(
        <div className="card-container">
            <span>{item?.Name}</span>
        </div>
    )
}