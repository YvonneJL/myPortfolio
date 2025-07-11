import type { IProject } from "../interfaces/Project";
import ChapterHeadline from "./ChapterHeadline";
import SingleProject from "./SingleProject";


export default function Projects() {

    const projects: IProject[] = [{
        imgSrc: "/img/Bildschirmfoto 2025-07-10 um 11.14.55.png",
        name: "Rock Paper Scissors Project",
        github: "https://github.com/YvonneJL/Rock-Paper-Scissors-React-Project?tab=readme-ov-file",
        deployment: "https://rock-paper-scissors-react-project.vercel.app/"
    },
    {
        imgSrc: "/img/Bildschirmfoto 2025-07-10 um 11.14.55.png",
        name: "Rock Paper Scissors Project",
        github: "https://github.com/YvonneJL/Rock-Paper-Scissors-React-Project?tab=readme-ov-file",
        deployment: "https://rock-paper-scissors-react-project.vercel.app/"
    },
    {
        imgSrc: "/img/Bildschirmfoto 2025-07-10 um 11.14.55.png",
        name: "Rock Paper Scissors Project",
        github: "https://github.com/YvonneJL/Rock-Paper-Scissors-React-Project?tab=readme-ov-file",
        deployment: "https://rock-paper-scissors-react-project.vercel.app/"
    },
    {
        imgSrc: "/img/Bildschirmfoto 2025-07-10 um 11.14.55.png",
        name: "Rock Paper Scissors Project",
        github: "https://github.com/YvonneJL/Rock-Paper-Scissors-React-Project?tab=readme-ov-file",
        deployment: "https://rock-paper-scissors-react-project.vercel.app/"
    }
]

  return (
    <section id="projects" className="pb-30">
    <ChapterHeadline content="Projects"/>
   <section className="flex flex-row gap-5 justify-center pt-10">
    {
    projects.map((project)=> (
        <SingleProject imgSrc={project.imgSrc} name={project.name} github={project.github} deployment={project.deployment}/>
    ))
   }
   </section>
    </section>
  )
}
