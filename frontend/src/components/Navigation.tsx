import Link from 'next/link';
import React from 'react'
import { auth0 } from "@/lib/auth0";

const Navigation = async () => {
  const session = await auth0.getSession();

  return (
    <>
      <header className="bg-gray-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Customer Manager</h1>
          <nav className="space-x-4">
            {session && (
              <>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/edit" className="hover:underline">
                  Edit Customer
                </Link>
                <Link href="/auth/logout" className="hover:underline">
                  Log out
                </Link>
              </>
            )}
            {!session && (
              <>
                <Link href="/auth/login" className="hover:underline">
                  Log in
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navigation
