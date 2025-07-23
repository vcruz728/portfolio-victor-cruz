export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-zinc-900 py-15 px-6">
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Contact</h2>
          <p className="mb-10 text-zinc-600 dark:text-zinc-300">
            I'd love to hear from you! Whether you want to collaborate, ask a
            question, or just say hello — feel free to send me a message below.
          </p>

          <form
            action="https://formsubmit.co/vcruz728@hotmail.com" // 👈 reemplaza con tu correo
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white"
            ></textarea>

            {/* Puedes personalizar el botón */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/thank-you"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
}
