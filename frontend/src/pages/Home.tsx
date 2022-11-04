import React, { useState } from 'react';
import { Navbar, AddScriptModal, Loading } from '../components';
import { useScriptsContext } from '../contexts';
import useHome from '../hooks/home.hook';
import { Iscript } from '../types/interfaces';
import { TrashIcon } from '@heroicons/react/24/solid'

const Home: React.FC = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>('')
  const { loading, displayScriptAddModal, setDisplayScriptAddModal, deleteScript } = useHome()
  const { scripts } = useScriptsContext()

  const scriptsToMap = searchPhrase.trim() === '' ? scripts : scripts.filter(script => script.title.toLowerCase().includes(searchPhrase.toLowerCase()))

  const scriptsMap = scriptsToMap.map((script:Iscript) => {
    return (
      <button
        key={script.code}
        onClick={() =>  navigator.clipboard.writeText(script.code)}
        className="relative px-20 py-10 mx-5 mt-10 text-3xl shadow-lg group ring ring-opacity-70 hover:ring-opacity-90 ring-white bg-gradient-to-br from-indigo-800 to-indigo-900 hover:to-indigo-800"
      >
        {script.title}
        <div className='absolute hidden top-1 right-2 group-hover:block'>
          <button onClick={() => deleteScript(script.id ?? '')}>
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      </button>
    )
  })

  return (
    <>
      <Navbar
        setDisplayScriptAddModal={setDisplayScriptAddModal}
        setSearchPhrase={setSearchPhrase}
        searchPhrase={searchPhrase}
      />
      <div className='flex items-center justify-center px-20'>
        {
          !loading ?
            <div className='flex flex-row-reverse flex-wrap items-center justify-center'>
              {scriptsMap}
            </div>
          :
            <div className='absolute pt-10 -translate-y-1/2 top-1/2 w-28'>
              <Loading />
            </div>
        }
      </div>
      {
        displayScriptAddModal
          ? <AddScriptModal
              setDisplayScriptAddModal={setDisplayScriptAddModal}
            />
          : null
      }
    </>
  )
}

export default Home;