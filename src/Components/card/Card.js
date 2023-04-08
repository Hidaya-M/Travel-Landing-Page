import "./Card.css"

function Card(props) {
  return (
    <>
    <div class="book">
    <p>{props.p}</p>
    <div class="cover">
      <img src={props.img} alt="img"/>
    </div>
   </div>
    </>
  )
}

export default Card
