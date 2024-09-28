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

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-content-container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="name">David R Hannah</h1>
            <h2 className="title">Aspiring Software Developer</h2>
            <p className="description">
              Passionate about building impactful software solutions. Currently seeking internship opportunities to apply my skills in React, TypeScript, and full-stack development.
            </p>
            <Link to="/projects" className="cta-button">
              View My Work!
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill">
              <img src={ReactIcon} alt="React" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src={TypescriptIcon} alt="TypeScript" />
              <p>TypeScript</p>
            </div>
            <div className="skill">
              <img src={JavascriptIcon} alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={NodeIcon} alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src={CssIcon} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src={HtmlIcon} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={TailwindIcon} alt="Tailwind" />
              <p>TailwindCSS</p>
            </div>
            <div className="skill">
              <img src={CplusplussIcon} alt="C++" />
              <p>C++</p>
            </div>
            <div className="skill">
              <img src={PythonIcon} alt="Python" />
              <p>Python</p>
            </div>
            <div className="skill">
              <img src={FigmaIcon} alt="Figma" />
              <p>Figma</p>
            </div>
            <div className="skill">
              <img src={GitIcon} alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill">
              <img src={NpmIcon} alt="Npm" />
              <p>NPM</p>
            </div>
            <div className="skill">
              <img src={ViteIcon} alt="ViteJS" />
              <p>ViteJS</p>
            </div>
            <div className="skill">
              <img src={SassIcon} alt="Sass" />
              <p>Sass</p>
            </div>

            {/* Add more skills as needed */}
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="projects-preview">
          <h3>Project Spotlight<img src={StarIcon} alt="Star Icon" /></h3>
          
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
          <h3>Get in Touch</h3>
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
