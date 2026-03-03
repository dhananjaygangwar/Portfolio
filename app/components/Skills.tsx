export default function Skills(){
    return(
        <section id="skills" className="bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">Skills</h3>

          <div className="grid md:grid-cols-2 gap-10 text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-3">Backend</h4>
              <p>C#, ASP.NET Core, REST APIs, Authentication</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Frontend</h4>
              <p>HTML, CSS, JavaScript</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Database</h4>
              <p>PostgreSQL, SQL Server</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Tools</h4>
              <p>Git, GitHub, Vercel</p>
            </div>
          </div>
        </div>
      </section>
    );
}