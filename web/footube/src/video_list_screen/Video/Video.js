import "./Video.css"

function Video({id,img, title, artist, publication_date ,views, category}){
return(
    <div class ="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    <div class="card" styles="width: 18rem">
        <a href = "html.?id{id}">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> {category}</p>
    <p class="card-text"> {artist}</p>
    <p class="card-text"> {publication_date}</p>
    <p class="card-text">views: {views}</p>
  </div>
  </a>
</div>
   </div>
);
}
export default  Video;