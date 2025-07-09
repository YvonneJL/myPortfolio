
import GoTo from './GoTo'

export default function Hero() {
  return (
    <section className='h-screen'>
    {/* Name */}
    <article className='flex justify-between border-b border-background pb-5'>

            <GoTo content='About' bgColor='bg-background' hoverEffect='hover:h-45'/>

        <div className='text-right text-8xl text-background-var2'>
            <h2 >Yvonne</h2>
            <h2 >Loder</h2>
        </div>
    </article>
    {/* Bezeichnung */}
    <article className='flex justify-between items-center  border-b border-background pb-5'>
        <p className='text-8xl text-background-var2 tracking-wider pt-25'>Frontend Developer</p>
        <div className='pt-25 hover:pt-5'>

        <GoTo content='Projects' bgColor='bg-link' hoverEffect='hover:h-50'/>
        </div>
    </article>
    {/* nur Link */}
    <article className='flex flex-row gap-10 pt-5'>
        <div className='border-r pt-10 hover:pt-5 pr-10 border-background'>
            <GoTo content='Skillset' bgColor='bg-cyan' hoverEffect='hover:h-35'/>
        </div>
        <div className='pt-10 hover:pt-5'>
            <GoTo content='Contact' bgColor='bg-background-var2' hoverEffect='hover:h-35'/>
        </div>
    </article>
    </section>
  )
}
