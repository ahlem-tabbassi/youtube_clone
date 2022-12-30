import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        channel="WWE"
        verified
        subs="92.3M"
        
        description="WWE on YouTube is your number one spot to catch WWE original shows and exclusives!

        Watch videos from all of your favorite WWE Superstars, backstage fallout from live shows including Raw, SmackDown, NXT and original shows such as Top 10, List This, WWE's The Bump and much more! "
      />
      <hr />
      <h3>Latest from WWE</h3>
      <VideoRow
        views="150k"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="3 hours ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="Bronson Reed takes his cut after helping The Miz win Ladder Match: Raw Exclusive, Dec. 19, 2022"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBKqiZzPfhpsI4vU0_eIRtmQ_1oaVh15i-w&usqp=CAU"
      />
      <VideoRow
        views="509K"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="6 hours ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="Ronda Rousey’s best moments of 2022: WWE Top 10, Dec. 22, 2022"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbloi96qICnoGS5WhlYxUGA7XscT7v3SRFYw&usqp=CAU"
      />
      <VideoRow
        views="1M"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="1 year ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="Roman Reigns vs. Brock Lesnar – Road to SummerSlam "
        image="https://wrestlemaniacos.com/site/wp-content/uploads/2022/02/Brock-Lesnar-Roman-Reigns-Wrestlemania-38.jpg"
      />
      <VideoRow
        views="95K"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="5 months ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="Bronson Reed returns to WWE!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThh5xkwtjPT2eKuZp-Xe4oWkPcOf7Bjn2r-dYd_OBFDwTR1rxaDZ4wlFnZpb9bteFlHQ&usqp=CAU"
      />
      <VideoRow
        views="1,4M"
        subs="92.3M"
        description="Stream WWE on Peacock https://pck.tv/3xP0IWP in the U.S. and on WWE Network http://wwe.yt/wwenetwork everywhere else ..."
        timestamp="3 days ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="WWE celebrates the Season of Giving"
        image="https://www.wwe.com/f/styles/og_image/public/2022/12/028_MAW_12092022gd_1060--2a3d14a2824f9176a4ff673018c117b5.jpg"
      />
      <VideoRow
        views="284K"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="2 years ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="Kevin Owens & Seth “Freakin” Rollins vs. The Usos: Raw"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDZDSnMwZ-wTW0fUY1UUa93G2S4zWWdbQqFKHew30ZIpNzUUi_sDtz4AyvqMUjOfI6AA&usqp=CAU"
      />
      <VideoRow
        views="720K"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="1 year ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="Your Roadmap to becoming a Frontend + Web 3.0 Developer in 2022 | 3-Day React JS + Web 3.0 Challenge"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUci3z2ppIgWBvVlymIKPpSd-8UU8NpFtcHfMqxHT6_xHV19Y_mnYu8JLj_2lCqeiCrbs&usqp=CAU"
      />
      <VideoRow
        views="4.5M"
        subs="92.3M"
        description="Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and more. Stream WWE on Peacock ..."
        timestamp="2 months ago"
        channel="WWE"
        channelImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TvvXo4ffropKBwUTQLpSGTS1-GSaY3A4GYVy8FEV3dLF8ePV7kCzdVciAhPQ-nb59lI&usqp=CAU"}
        title="FULL MATCH — Brock Lesnar vs. Roman Reigns — Winner Take All Title Unification Match: WM 38"
        image="https://www.wwe.com/f/styles/gallery_img_ml/public/2021/10/20211013_playlist_thumb--15c3ec46bc73b919d77085a0de17d8d8.jpg"
      />
    </div>
  );
}

export default SearchPage;