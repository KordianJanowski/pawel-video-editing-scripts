import React from 'react';
import { Navbar, AddScriptModal, Loading } from '../components';
import useHome from '../hooks/home.hook';
import { Iscript } from '../types/interfaces';

const Home: React.FC = () => {
  const { scripts, loading, displayScriptAddModal, setDisplayScriptAddModal } = useHome()

  const scriptsMap = scripts.map((script:Iscript) => {
    return (
      <button
        key={script.title}
        onClick={() =>  navigator.clipboard.writeText(script.code)}
        className="px-20 py-10 mx-5 text-3xl rounded-lg shadow-lg ring ring-opacity-70 hover:ring-opacity-90 ring-white bg-gradient-to-br from-indigo-800 to-indigo-900 hover:to-indigo-800"
      >
        {script.title}
      </button>
    )
  })

  return (
    <>
      <Navbar
        setDisplayScriptAddModal={setDisplayScriptAddModal}
      />
      <div className='flex items-center justify-center pt-10 border-t-4 border-white'>
        {
          !loading ?
            <div className='flex'>
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