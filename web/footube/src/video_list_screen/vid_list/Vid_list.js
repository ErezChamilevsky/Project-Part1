import videos from "../../data/vid.json"
import Video from "../Video/Video";
import "../Video/Video.css";
import "./Vid_list.css"
import { useState } from 'react';

function Vid_list(){
const [videosList, setVideoList] = useState(videos);
return(
    <div class = "video_list">{
        videosList.map((video)=>
            <div>
        <Video {...video}/>
        </div>
)
}</div>
); 
}
export default Vid_list;