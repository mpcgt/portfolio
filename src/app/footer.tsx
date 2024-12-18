import React from 'react'

export default function Footer() {
  return (
    

<footer className="w-full bg-black text-white rounded-lg shadow">
    <hr />
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                <li>
                    <a href="https://github.com/mpcgt/portfolio" className="hover:underline me-4 md:me-6">Repository</a>
                </li>
                <li>
                    <a href="https://github.com/mpcgt" className="hover:underline me-4 md:me-6">My profile GitHub</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/mpcgt" className="hover:underline">Max</a> ~ All Rights Reserved</span>
    </div>
</footer>
  )
}
