import type { IProject } from "../interfaces/Project";
import ChapterHeadline from "./ChapterHeadline";
import SingleProject from "./SingleProject";


export default function Projects() {

    const projects: IProject[] = [{
        imgSrc: "/video/iPhone-13-PRO-hangman-game-seven-xi.vercel.app-5x_k3dnhewk_ug.webm",
        name: "Hangman Project",
        github: "https://github.com/YvonneJL/Hangman-Game",
        deployment: "https://hangman-game-seven-xi.vercel.app/",
        needsRotate: true,
    },
    {
        imgSrc: "/video/iPhone-13-PRO-rock-paper-scissors-react-project.vercel.app-bsur93f9j-mdjw.webm",
        name: "Rock Paper Scissors Project",
        github: "https://github.com/YvonneJL/Rock-Paper-Scissors-React-Project?tab=readme-ov-file",
        deployment: "https://rock-paper-scissors-react-project.vercel.app/",
        needsRotate: false
    },
    {
        imgSrc: "/video/iPhone-13-PRO-pokemon-api-duo-project.vercel.app--xd977wtq3_bby.webm",
        name: "Pokemon Team Project",
        github: "https://github.com/YvonneJL/Project-Pokemon-API",
        deployment: "https://pokemon-api-duo-project.vercel.app/pikachu",
        needsRotate: false,
    },
    {
        imgSrc: "/video/iPhone-13-PRO-mov-react-project.vercel.app-n8u03m2wv1q__8.webm",
        name: ".MOV Project",
        github: "https://github.com/YvonneJL/.MOV-React-Project",
        deployment: "https://mov-react-project.vercel.app/",
        needsRotate: false,
    }
]

  return (
    <section id="projects" className="pb-30">
    <ChapterHeadline content="Projects"/>
   <section className="flex lg:flex-row flex-col items-center justify-center pt-15 lg:gap-5 gap-10">
    {
    projects.map((project, index)=> (
        
            <SingleProject key={index} needsRotate={project.needsRotate} imgSrc={project.imgSrc} name={project.name} github={project.github} deployment={project.deployment}/>
    
    ))
   }
   </section>
    </section>
  )
}
