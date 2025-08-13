import GoTo from "./GoTo";

export default function Hero() {
  const letters = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    "",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <section className="h-[calc(100vh-10px)]">
      {/* Name */}
      <article className="flex justify-between items-center border-darkerbeyge pb-5">
        <GoTo
          content="About"
          bgColor="border-2 border-yellow-200"
          hoverEffect="lg:hover:h-45 hover:h-35 hover:bg-yellow-200"
          link="#about"
        />

        <div className="text-right lg:text-8xl text-3xl text-grayish">
          <h2>Yvonne</h2>
          <h2>Loder</h2>
        </div>
      </article>
      {/* Bezeichnung */}
      <article className="flex justify-between items-center  border-darkerbeyge pb-5">
        {/* <p className="text-8xl  tracking-wider scrolling-text select-none pt-25 text-grayish">
          Frontend Developer
        </p> */}
       <div className="flex flex-col lg:flex-row items-start space-y-2 overflow-hidden">
  <div className="flex space-x-1">
    {letters.slice(0, 9).map((letter, index) => (
      <span
        key={`line1-${index}`}
        className="drag-in hover-wiggle inline-block lg:text-7xl text-2xl tracking-widest text-grayish pt-25"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {letter}
      </span>
    ))}
  </div>

  <div className="flex space-x-1">
    {letters.slice(8).map((letter, index) => (
      <span
        key={`line2-${index}`}
        className="drag-in hover-wiggle inline-block lg:text-7xl text-2xl tracking-widest text-grayish lg:pt-25"
        style={{ animationDelay: `${(index + 9) * 100}ms` }}
      >
        {letter}
      </span>
    ))}
  </div>
</div>
        <div className="lg:pt-10 pt-17 hover:pt-5 relative">
          <GoTo
            content="Projects"
            bgColor="bg-fuchsia-200"
            hoverEffect="hover:h-40"
            link="#projects"
          />
        </div>
      </article>
      {/* nur Link */}
      <article className="flex flex-row lg:gap-10 gap-5 lg:pt-5 pt-30">
        <div className="pt-10 hover:pt-5 ">
          <GoTo
            content="Skillset"
            bgColor="bg-fuchsia-200"
            hoverEffect="hover:h-35"
            link="#skillset"
          />
        </div>
        {/* <div className="bg-darkerbeyge w-[1px]"></div> */}
        <div className="pt-10 hover:pt-5 hover:bg-yellow-200 hover:rounded-br-4xl">
          <GoTo
            content="Contact"
            bgColor="border-2 border-yellow-200"
            hoverEffect="hover:h-35"
            link="#contact"
          />
        </div>
      </article>
    </section>
  );
}
