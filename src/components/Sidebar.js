import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './Sidebar.css';
import {IconContext} from 'react-icons';

function Sidebar() {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}} /* Ensure that all icons are white globally */>
          <div className="sidebar">
              <Link to="#" className='menu-bars'>
                  <FaIcons.FaBars onClick = {showSidebar} /* toggles the sidebar display, if on then then off vice versa */ /> 
                  
                  
              </Link>
            </div>  
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className ='nav-menu-items'onClick = {showSidebar}  /* CAN REMOVE IF ANNOYING, basically hides the panel when item is clicked */> 
                <li className="navbar-toggle">
                    <Link to ="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />

                    </Link>

                </li>
                
                {SidebarData.map((item,index) => { /* Function loads the menu items from Sidebar.js and displays them as list */ 
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )


                 }  ) }
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;
