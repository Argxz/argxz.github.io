import React from 'react'
import "../App.css"
import foto from "../assets/foto.jpg";

function Sidebar() {
    return (
        <div className='Sidebar'>
            {/* Menambahkan foto di bagian atas */}
            <div className='profile-picture'>
                <img src={foto} alt='Profile' />
            </div>
            {/* Menambahkan tombol */}
            <div className='sidebar-buttons'>
            <ul>
                    <li><button>Profile</button></li>
                    <li><button>Experiences</button></li>
                    <li><button>Education</button></li>
                    <li><button>Skills</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar