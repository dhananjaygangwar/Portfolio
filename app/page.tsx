import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-10">
      <h1 className="text-5xl font-bold">
        Dhananjay Gangwar
      </h1>

      <p className="mt-4 text-xl text-gray-400 max-w-2xl">
        Backend-focused full-stack developer .
      </p>

      <div className="mt-6 flex gap-4">
        <a href="/projects" className="px-6 py-3 bg-white text-black rounded">
          View Projects
        </a>
        <a href="https://github.com/dhananjaygangwar" className="px-6 py-3 border rounded">
          GitHub
        </a>
      </div>
    </main>
  );
}
