'use client';

import { FaGithub } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center space-x-2">
        <FaGithub className="w-5 h-5 text-white" />
        <a
          href="https://github.com/galang-nur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-teal-400 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
