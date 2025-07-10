
import { Link } from 'react-router-dom'

interface ISingleProjectProps {
imgSrc: string,
name: string,
github: string,
    deployment: string
}

export default function SingleProject({imgSrc, name, github, deployment}: ISingleProjectProps) {
  return (
    <div className='w-[13vw]'>
        <img src={imgSrc} alt={name} className=""/>
        <div className='bg-darkerbeyge my-5 h-[1px]'></div>
        <div className='flex flex-row justify-center text-sm text-grayish'>
            <Link to={github} className='border-2 border-fuchsia-200 hover:bg-fuchsia-200 px-3 py-2'>Git Hub</Link>
            <Link to={deployment} className='hover:border-2 hover:border-yellow-200 hover:bg-beyge bg-yellow-200 px-3 py-2 rounded-br-lg'>Deployment</Link>
        </div>
    </div>
  )
}
