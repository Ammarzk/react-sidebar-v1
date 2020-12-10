import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BsFillLightningFill } from "react-icons/bs";


export const SidebarData= [

{
    title: 'Dashboard',
    path :'/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text',

},
{
    title: 'Database',
    path :'/database',
    icon: <AiIcons.AiFillDatabase/>,
    cName: 'nav-text',

},
{
    title: 'KeywordPlanner',
    path :'/keyword-planner',
    icon: <FaIcons.FaPencilRuler/>,
    cName: 'nav-text',

},

{
    title: 'Competition',
    path :'/',
    icon: <IoIcons.IoMdAnalytics/>,
    cName: 'nav-text',

},
{
    title: 'Flash Sale',
    path :'/flash-sales',
    icon: <BsFillLightningFill />,
    cName: 'nav-text',

}


]