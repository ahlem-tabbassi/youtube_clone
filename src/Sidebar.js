import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar'>
      
      <SidebarRow Icon={HomeIcon}title="Home"/>
      <SidebarRow Icon={PlayCircleFilledIcon} title="Shorts"/>
      <SidebarRow Icon={SubscriptionsIcon}title="Subscriptions"/>
      <hr></hr>
      <SidebarRow Icon={VideoLibraryIcon}title="Library"/>
      <SidebarRow Icon={HistoryIcon}title="History"/>
      <SidebarRow Icon={SlideshowIcon}title="Your Videos"/>
      <SidebarRow Icon={WatchLaterIcon}title="Watch Later"/>
      <SidebarRow Icon={ThumbUpAltIcon}title="Liked Videos"/>
      <SidebarRow Icon={ExpandMoreIcon}title="Show More"/>
      <hr></hr>
      <h3>Explore</h3>
      
      <SidebarRow Icon={WhatshotIcon}title="Trending"/>
      
      <SidebarRow Icon={MusicNoteIcon}title="Music"/>
      <SidebarRow Icon={SportsEsportsIcon}title="Gaming"/>
      <SidebarRow Icon={EmojiEventsIcon}title="Sports"/>
      <hr></hr>
      <h3>More From Youtube</h3>
      <SidebarRow Icon={MovieCreationOutlinedIcon}title="Creator Studio"/>
      <SidebarRow Icon={PlayArrowOutlinedIcon}title="Youtube Music"/>
      <SidebarRow Icon={ChildCareOutlinedIcon}title="Youtube Kids"/>
      <SidebarRow Icon={LiveTvOutlinedIcon}title="Youtube Tv"/>
      <hr></hr>
      <SidebarRow Icon={SettingsIcon}title="Settings"/>
      <SidebarRow Icon={FlagOutlinedIcon}title="Report history"/>
      <SidebarRow Icon={ContactSupportOutlinedIcon}title="Help"/>
      <SidebarRow Icon={FeedbackOutlinedIcon}title="Send Feedback"/>
    </div>
  )
}

export default Sidebar
