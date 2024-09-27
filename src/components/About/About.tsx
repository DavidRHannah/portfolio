import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import './About.css';
import EducationIcon from './icons/education.svg';
import ExperienceIcon from './icons/experience.png';
import SkillsIcon from './icons/skills.png';
import InterestsIcon from './icons/interests.svg';
import DownloadIcon from './icons/download.svg';
import WaveIcon from './icons/wave.svg';
import AwardIcon from './icons/award.svg';
import CertificationIcon from './icons/certification.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about-container'>
      <PageHeader title='About' description="Here's a little more about me!"></PageHeader>
      <div className="about-content-container">
        {/* Introduction Section */}
        <section className="introduction">
          <div className="introduction-text">
            <h2><img src={WaveIcon} className="section-icon" alt="Wave Icon" />Hi, I'm David!</h2>
            <p>
              I'm a third-year Computer Science student at UC Riverside, passionate about building impactful software solutions.
              With a continuously improving full-stack development skillset and a keen interest in cybersecurity, I strive to create applications that are not only functional but also secure and user-friendly.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="education">
          <h3><img src={EducationIcon} className="section-icon" alt="Education Icon" />Education</h3>
          <div className="education-details">
            <h4>University of California, Riverside</h4>
            <p>Bachelor of Science in Computer Science</p>
            <p>Expected Graduation: June 2026</p>
            <p>Major GPA: 4.0 / 4.0</p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="technical-skills">
          <h3><img src={SkillsIcon} className="section-icon" alt='Skills icon' />Technical Skills</h3>
          <div className="skills-list">
            <ul>
              <li>React &amp; TypeScript</li>
              <li>Node.js &amp; Express</li>
              <li>JavaScript, HTML, CSS</li>
              <li>Python &amp; C++</li>
              <li>Version Control (Git)</li>
              <li>Agile Methodologies</li>
            </ul>
            <ul>
              <li>RESTful APIs</li>
              <li>Responsive Web Design</li>
              <li>Testing</li>
              <li>Cybersecurity Fundamentals</li>
              <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience">
          <h3><img src={ExperienceIcon} className="section-icon" alt='Experience Icon' />Experience</h3>
          <div className="experience-item">
            <h4>Software Development Intern</h4>
            <p><strong>Awesome Tech Company</strong>, Summer 2025</p>
            <p>
              - Notes from my future internship here :)
              <br />
            </p>
          </div>
        </section>
        
        {/* Awards */}
        <section className="awards">
          <h3><img src={AwardIcon} className="section-icon" alt='Award Icon' />Awards</h3>
          <div className="award-item">
            <h4>Mayor's Cup, CyberSkyline</h4>
            <p>August 2021 - June 2022</p>
            <p>
              - <b>1st Place </b> Inland Empire Desert Region High School Division
              <br />
              - Specialization: Linux Administration
              <br />
              - <Link to="https://www.credly.com/badges/d69018f6-78c4-42ae-8b4f-2805adcd6a79" target="_blank">Credly Verification</Link> 
              <br />
            </p>
          </div>
          <div className="award-item">
            <h4>National Cyber League, CyberSkyline</h4>
            <p>August 2021 - June 2022</p>
            <p>
              - Finished in the <b>top 5%</b> of the United States 
              <br />
              - Specialization: Web Application Security, Password Cracking, Enumeration and Exploitation
            </p>
          </div>
        </section>
        
        {/* Certifications */}
        <section className="certifications">
          <h3><img src={CertificationIcon} className="section-icon" alt='Certification Icon' />Certifications</h3>
          <div className="certification-item">
            <h4>Certified in Cybersecurity, ISC2</h4>
            <p>March 20, 2024</p>
            <p>
              - Tests core security principles, network security, access controls, and my ability to handle security operations,
              respond to incidents, and support business continuity and disaster recovery efforts.
              <br />
              - ISC2 Member ID: 1903565
              <br />
            </p>
          </div>
        </section>

        {/* Personal Interests Section */}
        <section className="interests">
          <h3><img src={InterestsIcon} className="section-icon" alt="Interests icon"  />Personal Interests</h3>
          <p>
            Outside of software development I enjoy the beach, working out, music, and the guitar. I believe that a balanced life fosters creativity and innovation, which I hope to bring into future projects.
          </p>
        </section>

        {/* Download Resume Section */}
        <section className="download-resume">
          <a href="/resume.pdf" download className="resume-button">
            <img src={DownloadIcon} className="download-icon" alt="download icon" />
            Download Resume
          </a>
        </section>
      </div>
    </div>
  )
}

export default About
