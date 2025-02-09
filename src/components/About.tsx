export default function About() {
  return (
    <>
      <div className="container w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] mt-16 md:mt-24">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-['CircularStd',sans-serif] mb-2">
            Hey, I'm{" "}
            <span className="relative group inline-flex text-blue-600 cursor-auto">
              {/* Default (KJ) */}
              <span className="transition-opacity duration-300 group-hover:opacity-0">
                KJ.
              </span>
              {/* Expanded (Kevin Julian) */}
              <span className="absolute left-0 top-0 whitespace-nowrap opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-full">
                Kevin Julian.
              </span>
            </span>
          </h1>
          <p className="invisible">you can not see me, I am not here.</p>
          <p className="text-lg text-gray-700">
            I have startup experience with{" "}
            <a
              href="https://www.workhelix.com/"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 decoration-blue-400 hover:decoration-blue-600"
            >
              Workhelix
            </a>
            , a startup co-founded by{" "}
            <a
              href="https://www.workhelix.com/#team"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 decoration-blue-400 hover:decoration-blue-600"
            >
              some of the most prominent voices in the research of information, economics, technologies, and the future of work
            </a>
            . Based on{" "}
            <span className="font-semibold">Daniel Rock</span>'s research with OpenAI (
            <a
              href="https://openai.com/index/gpts-are-gpts/"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 decoration-blue-400 hover:decoration-blue-600"
            >
              GPTs are GPTs
            </a>
            ), I worked on extracting, transforming, and loading hundreds of thousands of pieces of data into our web app and on engineering internal tooling, among other things.
          </p>
          <p className="invisible">you can not see me, I am not here.</p>
          <p className="text-lg text-gray-700">
            Currently, I am working at{" "}
            <a
              href="https://www.ibm.com/us-en"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 decoration-blue-400 hover:decoration-blue-600"
            >
              IBM
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
