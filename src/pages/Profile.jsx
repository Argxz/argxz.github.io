import React, { useState } from 'react';
import '../styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import foto from '../assets/foto2.png'
import foto2 from '../assets/foto3.png'

function Profile() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };
    
return (
    <div className="profile-container">
        <div className='image-card'>
        <div className="card">
            <div className="image-container">
                <img
                    src={foto}
                    alt="Image 1"
                    className="image"
                    onClick={() => handleImageClick(foto)}
                />
            </div>
        </div>
        <div className="card">
            <div className="image-container">
                <img
                    src={foto2}
                    alt="Image 2"
                    className="image"
                    onClick={() => handleImageClick(foto2)}
                />
            </div>
        </div>
        </div>
        <h1 className="name">RIYAN ARGA WIJAYA</h1>
        <p className="location">KOTA JAMBI, JAMBI · 36138 · <a href="mailto:riyanargaw@gmail.com">RIYANARGAW@GMAIL.COM</a></p>
        <p className="description">
        <span class="opening-text">Hi ! </span>, Iam Information Technology student at Dinamika Bangsa University Jambi, Have a strong understanding
                                    in the field of Computer Networking and Fullstack Development, Adaptive & Highly motivated
                                    learner with organizational experience primarily in the area of human resource development, This
                                    reflects my ability to work independently as well as in a team
        </p>
        <div className="social-icons">
            <a href="https://linkedin.com/in/riyanargaw" target="_blank" rel="noopener noreferrer" className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/argxz" target="_blank" rel="noopener noreferrer" className="icon">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://instagram.com/riyanargaw" target="_blank" rel="noopener noreferrer" className="icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img src={selectedImage} alt="Preview" className="modal-image" />
                </div>
            )}
    </div>
    );
}

export default Profile;
