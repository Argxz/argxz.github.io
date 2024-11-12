import React from 'react'
import '../styles/education.css';
import foto from '../assets/sekolah.png'
import foto2 from '../assets/sekolah2.png'


function Education() {
    return (
        <div className='educations'>
            <div className='title'>
                <h1>MY EDUCATION</h1>
            </div>
            <div className='school'>
                <div class="school-detail">
                    <img src={foto} alt="SMKN1" class="foto1"/>
                    <div class="title"><strong>SMKN 1 KOTA JAMBI</strong></div>
                    <div class="date">August 2019 - June 2021</div>
                    <div class="major"><strong>Computer Network Engineering</strong></div>
                    <div class="achieve">Average Final Score : 85 / 100 </div>
                </div>
                <div class="school-detail">
                    <img src={foto2} alt="UNAMA" class="foto2" />
                    <div class="title2"><strong>DINAMIKA BANGSA UNIVERSITY JAMBI</strong></div>
                    <div class="date">September 2021 - Present</div>
                    <div class="major"><strong>Informatics Engineering</strong></div>
                    <div class="achieve">GPA : 3.84/4.00 (133 Credits Exam) </div>
                </div>
            </div>
        </div>
    )
}

export default Education