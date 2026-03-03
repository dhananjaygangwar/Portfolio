export default function Contact(){
    return(
        <section id="contact" className="max-w-4xl mx-auto py-24 px-6">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>

        <div className="text-gray-400 space-y-4">
          <p>Email: yourmail@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/dhananjaygangwar"
              target="_blank"
              className="underline"
            >
              Dhananjay Gangwar
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dhananjaygangwar/"
              target="_blank"
              className="underline"
            >
              Dhananjay
            </a>
          </p>
        </div>
      </section>
    );
}