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
    <section className="h-screen mb-10">
      {/* Name */}
      <article className="flex justify-between border-b border-darkerbeyge pb-5">
        <GoTo
          content="About"
          bgColor="border-2 border-yellow-200"
          hoverEffect="hover:h-45 hover:bg-yellow-200"
          link=""
        />

        <div className="text-right text-8xl text-grayish">
          <h2>Yvonne</h2>
          <h2>Loder</h2>
        </div>
      </article>
      {/* Bezeichnung */}
      <article className="flex justify-between items-center  border-b border-darkerbeyge pb-5">
        {/* <p className="text-8xl  tracking-wider scrolling-text select-none pt-25 text-grayish">
          Frontend Developer
        </p> */}
        <div className="flex items-center space-x-1 overflow-hidden">
          {letters.map((char, index) => (
            <span
              key={index}
              className="drag-in hover-wiggle inline-block text-8xl tracking-widest text-grayish pt-25"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="pt-25 hover:pt-5 relative">
          <GoTo
            content="Projects"
            bgColor="bg-fuchsia-200"
            hoverEffect="hover:h-50"
            link="#projects"
          />
        </div>
      </article>
      {/* nur Link */}
      <article className="flex flex-row gap-10 pt-5">
        <div className="pt-10 hover:pt-5 ">
          <GoTo
            content="Skillset"
            bgColor="bg-fuchsia-200"
            hoverEffect="hover:h-35"
            link=""
          />
        </div>
        <div className="bg-darkerbeyge w-[1px]"></div>
        <div className="pt-10 hover:pt-5 hover:bg-yellow-200 hover:rounded-br-4xl">
          <GoTo
            content="Contact"
            bgColor="border-2 border-yellow-200"
            hoverEffect="hover:h-35"
            link=""
          />
        </div>
      </article>
    </section>
  );
}
