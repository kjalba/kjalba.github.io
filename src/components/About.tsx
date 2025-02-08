export default function About() {
  return (
    <>
      <div className="container w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] mt-16 md:mt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-['CircularStd',sans-serif] mb-2">
            Hey, I'm{" "}
            <span className="relative group inline-flex text-blue-600 cursor-pointer">
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
          <p className="text-lg text-gray-700">I have startup experience with <a href="https://www.workhelix.com/">Workhelix</a>. Based on <span>Daniel Rock</span>'s research with OpenAI, GPTs are GPTs, I worked on integrating data into the web app.
          </p>
          <p className="text-lg text-gray-700">
            Currently, I am working at IBM.
          </p>
        </div>
      </div>
    </>
  );
}
