export default function Resume() {
  return (
    <section id="resume" className="bg-gray-100 text-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Education */}
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-lg font-bold border-b-2 border-orange-500 inline-block pb-1">
              EDUCATION
            </h3>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">
              MSc Bioinformatics
            </h4>
            <p className="italic text-gray-600">
              University of Liverpool • 2023
            </p>
            <p className="mt-3 text-gray-700">
              Focused on computational biology, algorithms, and data analysis.
            </p>
          </div>

        </div>

        {/* Work */}
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-lg font-bold border-b-2 border-orange-500 inline-block pb-1">
              WORK
            </h3>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">
              Backend Developer
            </h4>
            <p className="italic text-gray-600">
              Personal Projects • 2024 – Present
            </p>
            <p className="mt-3 text-gray-700">
              Building REST APIs with ASP.NET Core, authentication systems,
              and PostgreSQL integrations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}