import React from 'react'

interface ILinkProps {
    link: string,
    name: string
}

export default function Links({link, name}: ILinkProps) {
  return (
              <div className='w-30 h-20 bg-yellow-200 rounded-br-4xl flex justify-center items-center mt-5 hover:bg-fuchsia-300 hover:h-25 hover:mt-0'>
            <a href={link}>{name}</a>
          </div>
  )
}
