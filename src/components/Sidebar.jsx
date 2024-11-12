import React from 'react'
import "../App.css"
import foto from "../assets/foto.jpg";
import { SidebarData } from './SidebarData';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className='profile-picture'>
                <img src={foto} alt='Profile' />
            </div>
            <ul className='SidebarList'>
                {SidebarData.map((val,key)=>{
                    return(
                        <li key = {key}
                        className='row' 
                        id={window.location.pathname==val.link ? "active" : ""}
                        onClick={()=>{
                            window.location.pathname = val.link
                        }}>
                            {""}
                            <div id='icon'>{val.icon}</div> <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar