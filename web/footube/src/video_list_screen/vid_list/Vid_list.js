import videos from "../../data/vid.json"
import Video from "../Video/Video";
import { useState } from 'react';

function Vid_list(){
const [videosList, setVideoList] = useState(videos);
return(
    <div className='App'>{
        videosList.map((video)=>
        <Video {...video}/>
)
}</div>
); 
}
export default Vid_list;