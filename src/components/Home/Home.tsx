import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
import ReactIcon from './icons/react.svg';
import TypescriptIcon from './icons/typescript.svg';
import JavascriptIcon from './icons/javascript.svg';
import NodeIcon from './icons/nodejs.svg';
import HtmlIcon from './icons/html.svg';
import CssIcon from './icons/css.svg';
import TailwindIcon from './icons/tailwindcss.svg';
import CplusplussIcon from './icons/cplusplus.svg';
import PythonIcon from './icons/python.svg';
import FigmaIcon from './icons/figma.svg';
import GitIcon from './icons/git.svg';
import NpmIcon from './icons/npm.svg';
import ViteIcon from './icons/vitejs.svg';
import SassIcon from './icons/sass.svg';
import StarIcon from './icons/star.png';
import GithubIcon from './icons/github-mark.svg'
import RedirectLink from './icons/open-in-new-icon.png';
import ContactIcon from './icons/contact.png';

const Home = () => {
  const skillsData = [
    { skillTitle: 'React', icon: ReactIcon },
    { skillTitle: 'TypeScript', icon: TypescriptIcon },
    { skillTitle: 'JavaScript', icon: JavascriptIcon },
    { skillTitle: 'Node.js', icon: NodeIcon },
    { skillTitle: 'CSS', icon: CssIcon },
    { skillTitle: 'HTML', icon: HtmlIcon },
    { skillTitle: 'TailwindCSS', icon: TailwindIcon },
    { skillTitle: 'C++', icon: CplusplussIcon },
    { skillTitle: 'Python', icon: PythonIcon },
    { skillTitle: 'Figma', icon: FigmaIcon },
    { skillTitle: 'Git', icon: GitIcon },
    { skillTitle: 'NPM', icon: NpmIcon },
    { skillTitle: 'ViteJS', icon: ViteIcon },
    { skillTitle: 'Sass', icon: SassIcon },
  ];
  return (
    <div className='home-container'>
      <div className="home-content-container">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-name">David R Hannah</div>
            <div className="hero-title">Aspiring Software Developer</div>
            <div className="hero-description">
              Passionate about building impactful software solutions. Currently seeking internship opportunities to apply my skills in React, TypeScript, and full-stack development.
            </div>
            <Link to="/projects" className="cta-button">
              View My Work!
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill">
                <img src={skill.icon} alt={skill.skillTitle} className="skill-icon" />
                <div className="skill-title">{skill.skillTitle}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="projects-preview">
          <h3>Project Spotlight<img src={StarIcon} alt="Star Icon" className="header-icon star-icon" /></h3>
          
          <div className="projects-grid">
            <div className="project-card">
              <h4>Etch-A-Sketch</h4>
              <p>It's like the original, but with a few more features. Beware, big time waster.</p>
              <div className="project-links">
                <Link to="https://github.com/davidrhannah/etcha-sketch" target='_blank'>
                  <img src={GithubIcon} alt="github icon" className='icon invert-reverse'/>
                </Link>
                <Link to="https://davidrhannah.github.io/etcha-sketch/" target='_blank'>
                  <img src={RedirectLink} alt="website icon" className='icon invert'/>
                </Link>
              </div>
            </div>
            <div className="project-card">
              <h4>C++ Text Based RPG</h4>
              <p>Worked with <b>four</b> other aspiring developers on a one month deadline, <b>zero memory leaks</b>, automated <b>testing</b> via <b>GTest</b>. Repository and details are available by request.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h3><img src={ContactIcon} alt="Contact Icon" className="header-icon contact-icon" />Get in Touch</h3>
          <p>
            I'm currently open to internship opportunities. Feel free to reach out to me via{' '}
            <a href="mailto:drhannah@protonmail.com">email</a> or connect with me on{' '}
            <a href="https://www.linkedin.com/in/DavidRHannah" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>!
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home
