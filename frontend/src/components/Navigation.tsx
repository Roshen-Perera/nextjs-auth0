import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (
    <>
      <header className="bg-gray-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Customer Manager</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/edit" className="hover:underline">
              Edit Customer
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navigation
