import React from 'react'
import ChapterHeadline from './ChapterHeadline'
import type { IIcon } from '../interfaces/Icon'
import SingleSkill from './SingleSkill'

export default function Skillset() {

const skills: IIcon[] = [{
    path: "/icons/react.svg",
    name: "React",
    gridPos: "row-start-4 col-start-1"
},
{
    path: "/icons/typescript.svg",
    name: "Typescript",
    gridPos: "row-start-4 col-start-2"
},
{
    path: "/icons/javascript.svg",
    name: "JavaScript",
    gridPos: "row-start-4 col-start-3"
},
{
    path: "/icons/html5.svg",
    name: "HTML5",
    gridPos: "row-start-4 col-start-4"
},
{
    path: "/icons/css.svg",
    name: "CSS3",
    gridPos: "row-start-3 col-start-1"
},
{
    path: "/icons/tailwindcss.svg",
    name: "Tailwind CSS",
    gridPos: "row-start-3 col-start-2"
},{
    path: "/icons/sass.svg",
    name: "Sass",
    gridPos: "row-start-3 col-start-3"
},{
    path: "/icons/git.svg",
    name: "Git",
    gridPos: "row-start-2 col-start-1"
},
{
    path: "/icons/vite.svg",
    name: "Vite",
    gridPos: "row-start-2 col-start-2"
},
{
    path: "/icons/supabase.svg",
    name: "Supabase",
    gridPos: "row-start-1 col-start-1"
},
{
    path: "/icons/figma.svg",
    name: "Figma",
    gridPos: "row-start-1 col-start-2"
},
]

  return (
    <section id="skillset" className="pb-30">
        <ChapterHeadline content="Skillset"/>
       <section className="grid grid-cols-8 grid-rows-3 gap-x-20 gap-y-15 pt-10">
        {
            skills.map((skill, index) => (
                <SingleSkill index={index} path={skill.path} name={skill.name} gridPos={skill.gridPos}/>
            ))
        }
       </section>
        </section>
  )
}
