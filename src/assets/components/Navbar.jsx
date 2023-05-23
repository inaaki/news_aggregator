import React from 'react'

export default function Navbar() {
  // routing based on user login or logout
  const loggedIn = false
  return (
    <nav class="bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-end h-16">
          <div class="flex items-center">
            <div class="ml-4">
              {loggedIn ? (
                <a class="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                  Logout
                </a>
              ) : (
                <>
                  <a class="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
                    Login
                  </a>
                  <a class="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">
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
