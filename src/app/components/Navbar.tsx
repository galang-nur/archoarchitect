"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-36 py-4 bg-gray-900 mx-auto">
      {/* Left: Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        priority
      />
      {/* Right: Links */}
      <div className="flex gap-6">
        <Link href="/" className="text-gray-100 hover:text-white font-medium">
          Home
        </Link>
        <Link href="/profile" className="text-gray-100 hover:text-white font-medium">
          Profile
        </Link>
        <Link href="/works" className="text-gray-100 hover:text-white font-medium">
          Works
        </Link>
      </div>
    </nav>
  );
}