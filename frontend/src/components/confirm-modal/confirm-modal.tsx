import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface Iprops {
  setDisplayConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
  deleteScript: (scriptId: string) => void
  scriptIdToDelete: string
}

const ConfirmModal: React.FC<Iprops> = ({ setDisplayConfirmDeleteModal, deleteScript, scriptIdToDelete }) => {
  return (
    <>
      <div className='absolute top-0 left-0 z-50 w-screen h-screen bg-black opacity-70'></div>
      <div className='absolute top-0 left-0 z-50 w-screen h-screen'>
        <div className='absolute bg-gradient-to-br from-indigo-800 to-indigo-900  border-4 border-white w-[48rem] h-[13rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-5'>
          <button
            className='absolute top-1 right-1'
            onClick={() => setDisplayConfirmDeleteModal(false)}
          >
            <XMarkIcon stroke='white' strokeWidth={0.5} className="w-12 h-12" />
          </button>
          <h2 className='mb-10 text-4xl'>Czy na pewno chcesz usunąć skrypt?</h2>
          <div className='flex items-center justify-between'>
            <button
              onClick={() => {
                deleteScript(scriptIdToDelete ?? '')
                setDisplayConfirmDeleteModal(false)
              }}
              className='p-4 text-3xl bg-red-500'
            >
              Usuń
            </button>
            <button
              onClick={() => setDisplayConfirmDeleteModal(false)}
              className='p-4 text-3xl bg-green-600'
            >
                Anuluj
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmModal;