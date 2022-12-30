import React from "react";
import "./RecommendedVideo.css";
import VideoCard from "./VideoCard";

function RecommendedVideo() {
  return (
    <div className="recommendedVideos">
      <div className="suggestion">
      <button class="button">All</button>
      <button class="button">Television series</button>
      <button class="button">Music</button>
      <button class="button">Gaming</button>
      <button class="button">Mixes</button>
      <button class="button">Live</button>
      <button class="button">Cooking shows</button>
      <button class="button">Trailers</button>
      <button class="button">Animated film</button>
      <button class="button">History</button>
      <button class="button">Statistics</button>
      <button class="button">Recently uploaded</button>
      <button class="button">Lessons</button>
      <button class="button">News</button>
      </div>
      <h2></h2>
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
       <div className="child">
       <VideoCard 
          title="Most extreme moments of 2022: WWE Top 10, Dec. 18, 2022"
          views="152K views"
          timestamp="1 day ago"
          channelImage="https://img.youtube.com/vi/a__8uTgGWrY/sddefault.jpg"
          channel="WWE"
          image="https://i.ytimg.com/vi/a__8uTgGWrY/maxresdefault.jpg"
        />
        </div>
        <div className="child">
        <VideoCard className="child"
          title="Adele - Rolling in the Deep (Official Music Video)"
          views="2.1B views"
          timestamp="12 years ago"
          channelImage="https://img.youtube.com/vi/U3ASj1L6_sY/sddefault.jpg"
          channel="Adele"
          image="https://i.ytimg.com/vi/rYEDA3JcQqw/maxresdefault.jpg"
        /></div>
        <div className="child">
        <VideoCard className="child"
          title="Ed Sheeran - Thinking Out Loud (Official Music Video)"
          views="3.5B views"
          timestamp="8 year ago"
          channelImage="https://img.youtube.com/vi/--vtqk5Q154/sddefault.jpg"
          channel="Ed Sheeran"
          image="https://briananderson.net/wp-content/uploads/2019/06/thinking-out-loud.png"
        /></div>
        <div className="child">
        <VideoCard className="child"
          title="How to Fix Pixelated Image: Restore the Quality of Your Images"
          views="1M views"
          timestamp="1 years ago"
          channelImage="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"
          channel="Photoshop"
          image="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
        /></div>
        <div className="child">
        <VideoCard className="child"
          title="Funniest moments of 2022: WWE Playlist"
          views="200K views"
          timestamp="1 month ago"
          channelImage="https://img.youtube.com/vi/a__8uTgGWrY/sddefault.jpg"
          channel="WWE"
          image="https://img.youtube.com/vi/HTE1WzYrheA/sddefault.jpg"
        /></div>
        <div className="child">
        <VideoCard className="child"
          title="Adele - Easy On Me (Official Video)"
          views="321M views"
          timestamp="1 years ago"
          channelImage="https://img.youtube.com/vi/U3ASj1L6_sY/sddefault.jpg"
          channel="Adele"
          image="https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg"
        /></div>
        <div className="child">
        <VideoCard className="child"
          title="Lady Gaga - Bloody Mary (Lyrics)"
          views="300K views"
          timestamp="2 days ago"
          channelImage="https://celebmafia.com/wp-content/uploads/2020/05/lady-gaga-photoshoot-for-allure-magazine-2019-6.jpg"
          channel="musiic"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hf_M5QlR-SPy23n8dbzzXftwYmQx9Emlaw&usqp=CAU"
        /></div>
        <div className="child">
        <VideoCard className="child"
          title="15 Incredible New Emerging Technologies"
          views="3M views"
          timestamp="1 yeras ago"
          channelImage="https://media.lesechos.com/api/v1/images/view/5e0dfd3f8fe56f3df63be7f7/1280x720/202303-1.jpg"
          channel="Top 5"
          image="https://www.humanite.fr/sites/default/files/images/impact-of-technology-on-employment.jpg"
        />
        </div>
        <div className="child">
        <VideoCard className="child"
          title="The World in 2050: Future Technology"
          views="2.4M views"
          timestamp="2 years ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0XPl606yymd34lgeQTWxP_5QKIm541QctXo1FGEhsp1QQTWSiEbsFFlLTWVIYNQVrX0&usqp=CAU"
          channel="Insane curiosity"
          image="https://i.ytimg.com/vi/PlSjpRce18s/maxresdefault.jpg"
        /></div>
      </div>
    </div>
  );
}

export default RecommendedVideo;
