
import { Link } from 'react-router-dom'

interface IGoToProps {
    content: string,
    bgColor: string,
    hoverEffect: string
}

export default function ({content, bgColor, hoverEffect}: IGoToProps) {
  return (
    <Link to={""} className={`w-70 h-30 ${bgColor} rounded-br-4xl flex items-end hover:text-white text-lg hover:text-2xl ${hoverEffect}`}>
        <p className='font-extralight p-2'>{content}</p>
    </Link>
  )
}
