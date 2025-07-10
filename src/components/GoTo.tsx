
import { Link } from 'react-router-dom'

interface IGoToProps {
    content: string,
    bgColor: string,
    hoverEffect: string,
    link: string
}

export default function ({content, bgColor, hoverEffect, link}: IGoToProps) {
  return (
    <Link to={link} className={`w-70 h-30 ${bgColor} rounded-br-4xl flex items-end hover:text-zinc-50 text-lg hover:text-2xl ${hoverEffect}`}>
        <p className='font-extralight p-2'>{content}</p>
    </Link>
  )
}
