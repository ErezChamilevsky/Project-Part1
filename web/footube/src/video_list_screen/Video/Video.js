import "./Video.css"
function Video({id, title, artist, publication_date ,views, category}){
return(
    <a href="video.html?id ={id}">
    <div className ="video">
    <div>
            <h3>{title}</h3>
            <span>{artist}</span>, <time>{publication_date}</time>
            <div>{category}</div>
            <div>{views}</div>
    </div>
    </div>
</a>
);
}
export default  Video;