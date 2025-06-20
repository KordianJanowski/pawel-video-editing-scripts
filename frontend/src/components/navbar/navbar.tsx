import React from 'react';
import { Link } from "react-router-dom";

interface Iprops {
  setDisplayScriptAddModal: React.Dispatch<React.SetStateAction<boolean>>
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
  searchPhrase: string
}

const Navbar: React.FC<Iprops> = ({ setDisplayScriptAddModal, setSearchPhrase, searchPhrase }) => {
  let isOpen = false

  const searchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value)
  }

  return (
    <nav className="relative bg-white border-b-4 border-white shadow bg-gradient-to-br from-indigo-800 to-indigo-900">
      <div className="container px-6 py-4 mx-auto md:flex">
          <div className="flex items-center justify-between">
              <div>
                <Link to='/' className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">PVES</Link>
              </div>

              <div className="flex md:hidden">
                  <button onClick={() => isOpen = !isOpen} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400" aria-label="toggle menu">
                    {
                      isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    }
                  </button>
              </div>
          </div>

          <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}>
              <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                  <button onClick={() => setDisplayScriptAddModal(true)} className="px-2.5 py-2 text-gray-700 duration-100 transform  dark:text-gray-200 border border-transparent hover:border-gray-400 md:mx-2">Dodaj skrypt</button>
              </div>

              <div className="relative mt-4 md:mt-0">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                  </span>

                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-200 placeholder-gray-400 bg-transparent bg-white border hover:text-white focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-white" placeholder="Szukaj"
                    value={searchPhrase}
                    onChange={(e) => searchInputChange(e)}
                  />
              </div>
          </div>
      </div>
  </nav>
  )
}

export default Navbar;