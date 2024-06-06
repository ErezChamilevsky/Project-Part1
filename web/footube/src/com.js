import React from "react";
import { Link,useParams } from "react-router-dom";

function Com(){

    const { vid_id } = useParams()


    return(
      <Link to="/{vid_id}">
        <p>Hello world {vid_id}  </p>
        </Link>
    );
}

export default Com;