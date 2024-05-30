import "./Video.css"
import { Link } from "react-router-dom";
function Video({id,img, title, artist, publication_date ,views, category}){
return(
    <div class ="col-xl-2 col-lg-3 col-md-4 col-sm-6 border-0">
    <div class="card" styles="width: 18rem">
        <Link to = "html.?id{id}">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p class="card-text"> {title}</p>
    <p class="card-text"> {artist}</p>
    <div class="card-footer">
      <small class="text-body-secondary">views | {publication_date}</small>
  </div>
</div>
  </Link>
</div>
   </div>
);
}
export default  Video;