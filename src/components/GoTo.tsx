


interface IGoToProps {
    content: string,
    bgColor: string,
    hoverEffect: string,
    link: string
}

export default function ({content, bgColor, hoverEffect, link}: IGoToProps) {
  return (
    <a href={link} className={`lg:w-70 lg:h-30 w-35 h-25 ${bgColor} rounded-br-4xl flex items-end hover:text-zinc-50 text-lg hover:text-2xl ${hoverEffect}`}>
        <p className='font-extralight p-2'>{content}</p>
    </a>
  )
}
