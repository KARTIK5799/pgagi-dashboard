import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 text-white">
      <div className="max-w-md w-full text-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={30}
          className="mx-auto mb-8 dark:invert"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl mb-8 font-light leading-relaxed">
          We’re working hard to bring you something amazing. Stay tuned for updates!
        </p>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Deploy your project
        </a>
      </div>

      <footer className="mt-16 text-sm text-indigo-200 text-center">
        &copy; {new Date().getFullYear()} Kartik Sapkal. All rights reserved.
      </footer>
    </div>
  );
}
