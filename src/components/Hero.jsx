export default function Hero() {
  return (
    <section
      id="main"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white "
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="z-10 px-6">
        <p className="text-sm text-yellow-400 uppercase tracking-widest">Hi there!</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">
          <span className="text-blue-400">Víctor Hugo Cruz García</span> | Full-stack Developer <br />
          Based in Mexico • Passionate about React, Node.js & Databases
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          I’m a software developer with experience in building full-stack applications.
          I enjoy learning new tools and building solutions with modern technologies like
          <strong> React, Node.js, MySQL, and MongoDB</strong>.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block border border-white px-6 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
        >
          PROJECTS
        </a>
      </div>
    </section>
  );
}
