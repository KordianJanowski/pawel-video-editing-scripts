import React from 'react';

interface Iprops {
  setDisplayScriptAddModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddScriptModal: React.FC<Iprops> = ({ setDisplayScriptAddModal }) => {
  return (
    <div className='absolute top-0 left-0 z-50 w-screen h-screen bg-black opacity-80'>
      <button
        className='absolute right-0 m-5 text-5xl'
        onClick={() => setDisplayScriptAddModal(false)}
      >
        x
      </button>
    </div>
  )
}

export default AddScriptModal;