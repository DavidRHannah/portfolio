import React from 'react';
import './Projects.css';
import PageHeader from '../PageHeader/PageHeader';
import ProjectCard from '../ProjectCard/ProjectCard';
import PortfolioSC from './ProjectScreenshots/project-card-test.png';
import AdminDashboardSC from './ProjectScreenshots/admin-dashboard-demo.png';
import Connect4SC from './ProjectScreenshots/connect4-demo.png';
import EtchASketchSC from './ProjectScreenshots/etchasketch-demo.jpg';
import SignUpSC from './ProjectScreenshots/sign-up-demo.png';
import TicTacToeSC from './ProjectScreenshots/tictactoe-demo.png';
import RPGSC from './ProjectScreenshots/rpg-demo.png';


const projectsData = [
  {
    title: "Text Based RPG",
    subtitle: "Worked with four others on a one month deadline, memory leak free, automated testing.",
    screenshot: RPGSC,
    techStack: ["C++", "CMake", "Make", "Memcheck", "GTest", "Agile", "TDD", "Figma"],
    githubLink: "https://github.com/DavidRHannah/",
    liveLink: "https://github.com/DavidRHannah/",
  },
  {
    title: "Etch-A-Sketch",
    subtitle: "It's like the original, but with a few more features. Beware, big time waster.",
    screenshot: EtchASketchSC,
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/DavidRHannah/etcha-sketch",
    liveLink: "https://davidrhannah.github.io/etcha-sketch/",
  },
  {
    title: "Admin Dashboard",
    subtitle: "An Admin Dashboard built with Javascript and CSS.",
    screenshot: AdminDashboardSC,
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/DavidRHannah/admin-dashboard",
    liveLink: "https://davidrhannah.github.io/admin-dashboard",
  }, 
  {
    title: "Sign Up",
    subtitle: "A foresty sign up page.",
    screenshot: SignUpSC,
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/DavidRHannah/sign-up",
    liveLink: "https://davidrhannah.github.io/sign-up",
  },
  {
    title: "Connect 4",
    subtitle: "A classic Connect 4 game built with React.",
    screenshot: Connect4SC,
    techStack: ["HTML", "Typescript", "TailwindCSS", "React" ],
    githubLink: "https://github.com/DavidRHannah/connect4js",
    liveLink: "https://connect4js.vercel.app",
  },
  {
    title: "Tic Tac Toe",
    subtitle: "Nothing more, nothing less.",
    screenshot: TicTacToeSC,
    techStack: ["HTML", "TailwindCSS", "Typescript", "React"],
    githubLink: "https://github.com/DavidRHannah/tictactoejs",
    liveLink: "https://tictactoejs-drh.vercel.app/",
  },
  {
    title: "Portfolio",
    subtitle: "A place to show my work.",
    screenshot: PortfolioSC,
    techStack: ["HTML", "CSS", "TypeScript", "React"],
    githubLink: "https://github.com/DavidRHannah/portfolio",
    liveLink: "https://portfolio-beta-hazel-61.vercel.app",
  },

];

const Projects = () => {
  return (
    <div className='projects-container'>
      <PageHeader title="Projects" description="Here's a few projects. I'm happy to answer any questions about them!" />
      <div className="project-cards-container">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            screenshot={project.screenshot}
            techStack={project.techStack}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
