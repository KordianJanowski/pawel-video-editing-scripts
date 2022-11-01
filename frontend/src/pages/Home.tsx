import React, { useState } from 'react';
import { Navbar, AddScriptModal, Loading } from '../components';
import { useScriptsContext } from '../contexts';
import useHome from '../hooks/home.hook';
import { Iscript } from '../types/interfaces';

const Home: React.FC = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>('')
  const { loading, displayScriptAddModal, setDisplayScriptAddModal } = useHome()
  const { scripts } = useScriptsContext()

  const scriptsToMap = searchPhrase.trim() === '' ? scripts : scripts.filter(script => script.title.includes(searchPhrase))

  const scriptsMap = scriptsToMap.map((script:Iscript) => {
    return (
      <button
        key={script.code}
        onClick={() =>  navigator.clipboard.writeText(script.code)}
        className="px-20 py-10 mx-5 mt-5 text-3xl shadow-lg ring ring-opacity-70 hover:ring-opacity-90 ring-white bg-gradient-to-br from-indigo-800 to-indigo-900 hover:to-indigo-800"
      >
        {script.title}
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
      <div className='flex items-center justify-center pt-10'>
        {
          !loading ?
            <div className='flex flex-row-reverse flex-wrap'>
              {scriptsMap}
            </div>
          :
            <div className='absolute -translate-y-1/2 top-1/2 w-28'>
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