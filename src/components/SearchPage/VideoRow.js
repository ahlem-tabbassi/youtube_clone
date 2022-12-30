import React from "react";
import "./VideoRow.css";
import { Avatar } from "@mui/material";
function VideoRow({
  views,
  
  channelImage,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          
          {" "}
          
          {views} views • {timestamp}
           
          {" "}
          <span>
          <Avatar className="channelImage" alt={channelImage} src={channelImage }/> 
          {channel} </span>
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;