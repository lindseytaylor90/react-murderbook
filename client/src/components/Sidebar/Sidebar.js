import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow.js';
import {
    LocalHospital, 
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons';
import user from '../../data/user'
import baseUrl from '../../shared';

const Sidebar = () => {
    return(
      <div className="sidebar">
          <SidebarRow src={baseUrl + user.photoURL} title={user.displayName}/>
          <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center"/>
          <SidebarRow Icon={EmojiFlags} title="Pages"/>
          <SidebarRow Icon={People} title="Friends"/>
          <SidebarRow Icon={Chat} title="Messanger"/>
          <SidebarRow Icon={Storefront} title="Marketplace"/>
          <SidebarRow Icon={VideoLibrary} title="Videos"/>
          <SidebarRow Icon={ExpandMoreOutlined} title="Expand More"/>
      </div>  
    );
}

export default Sidebar;