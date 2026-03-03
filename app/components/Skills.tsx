export default function Skills(){
    return(
        <section id="skills" className="bg-gray-900 py-24 px-6">
        <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-3 text-lg">Backend</h4>
            <p className="text-gray-300">
            C#, ASP.NET Core, REST APIs, Authentication
            </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-3 text-lg">Frontend</h4>
            <p className="text-gray-300">
            HTML, CSS, JavaScript
            </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-3 text-lg">Database</h4>
            <p className="text-gray-300">
            PostgreSQL, SQL Server
            </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition">
            <h4 className="text-white font-semibold mb-3 text-lg">Tools</h4>
            <p className="text-gray-300">
            Git, GitHub, Vercel
            </p>
        </div>

        </div>
      </section>
    );
}