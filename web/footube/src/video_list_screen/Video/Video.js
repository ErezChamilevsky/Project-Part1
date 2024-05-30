import "./Video.css"
import { Link } from "react-router-dom";
function Video({id,img, title, artist, publication_date ,views, category}){
return(
    <div class="card" styles="width: 18rem">
        <Link to = "html.?id{id}">
  <img src={img} className="card-img-top" alt="Responsive image"/>
  <div class="card-body">
  <p class="card-text"> {title}</p>
    <div class="card-footer" styles="background-color:trasparent">
    <div class="artist"> {artist}</div>
      <text class="text-body-secondary">views | {publication_date}</text>
  </div>
</div>
  </Link>
</div>
);
}
export default  Video;