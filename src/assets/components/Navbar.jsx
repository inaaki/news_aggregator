import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
  // routing based on user login or logout
  const loggedIn = false
  return (
    <nav className="bg-gray-800 fixed inset-x-0 py-3 md:p-0">
      <div className="container mx-auto px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-16">
          <SearchBar />
          <div className="flex items-center">
            <div className="ml-4">
              {loggedIn ? (
                <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                  Logout
                </a>
              ) : (
                <>
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                    Login
                  </a>
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
