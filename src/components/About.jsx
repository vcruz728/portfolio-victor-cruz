export default function About() {
  return (
    <section id="about" className="bg-gray-100 dark:bg-zinc-900 py-15 px-6">
      <div data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Imagen de perfil */}
        <div className="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
          <img
            src="/images/profile.jpg"
            alt="Victor Cruz"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">About Me</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Víctor Hugo Cruz García
            </span>
            , a full-stack developer with a passion for building intuitive and
            scalable web applications.
            <br />
            <br />I specialize in <strong>React, Node.js, MySQL</strong>, and
            have experience working on both frontend and backend projects. I
            enjoy transforming complex ideas into clean and efficient code, and
            I'm always looking for opportunities to grow and take on new
            challenges.
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 italic">
            “Code is not just code — it's design, logic, and creativity
            combined.”
          </p>
        </div>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="/docs/Victor_Hugo_Cruz_Garcia-es.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Descargar CV (Español)
          </a>
          <a
            href="/docs/Victor_Hugo_Cruz_Garcia-en.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download CV (English)
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}
