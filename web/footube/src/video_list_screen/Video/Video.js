import "./Video.css"

function Video({id,img, title, artist, publication_date ,views, category}){
return(
    <a href="video.html?id ={id}">
    <div class = "video_detail">
    <img class = "video_photo" src={img}/>
            <div>{title}</div>
            <div>{artist}</div>
            <time>{publication_date}</time>
            <div>{category}</div>
            <div>{views}</div>
    </div>
</a>
);
}
export default  Video;