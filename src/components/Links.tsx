

interface ILinkProps {
    link: string,
    name: string
}

export default function Links({link, name}: ILinkProps) {
  return (
              <div className='lg:w-30 lg:h-20 w-25 h-15 text-[12px] lg:text-[15px] bg-yellow-200 rounded-br-4xl flex justify-center items-center lg:mt-5 hover:bg-fuchsia-300 hover:h-25 hover:mt-0'>
            <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
          </div>
  )
}
