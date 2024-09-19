import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import GithubIcon from './icons/github-mark/github-mark.svg';
import RedirectIcon from './icons/open-in-new-icon.png';


interface ProjectCardProps {
  title: string;
  subtitle: string;
  screenshot: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, screenshot, techStack, githubLink, liveLink }) => {
  return (
    <div className='card-container'>
      <div className="project-info-container">
        <div className="project-screenshot-container">
            <img src={screenshot} alt={`${title} screenshot`} />
        </div>
        <div className="info-text-container">
            <div className="project-title">
                {title}
            </div>
            <div className="project-subtitle">
                {subtitle}
            </div>
        </div>
        <div className="tech-stack-container">
            {techStack.map((tech, index) => (
                <div className="tech-container" key={index}>
                <div className="tech-text">{tech}</div>
            </div>
            ))}
        </div>
        </div>
      <div className="project-links">
        <Link to={githubLink} target='_blank'>
          <img src={GithubIcon} alt="github icon" className='icon invert-reverse'/>
        </Link>
        <Link to={liveLink} target='_blank'>
          <img src={RedirectIcon} alt="website icon" className='icon invert'/>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;