import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import useAddScriptModal from '../../hooks/add-script-modal.hook';
import {
  Formik,
  Form,
  Field
} from 'formik';

interface Iprops {
  setDisplayScriptAddModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddScriptModal: React.FC<Iprops> = ({ setDisplayScriptAddModal }) => {
  const { initialValues, addScript } = useAddScriptModal({ setDisplayScriptAddModal })

  return (
    <>
      <div className='absolute top-0 left-0 z-50 w-screen h-screen bg-black opacity-70'></div>
      <div className='absolute top-0 left-0 z-50 w-screen h-screen'>
        <div className='absolute bg-gradient-to-br from-indigo-800 to-indigo-900  border-4 border-white w-[48rem] h-[32rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-5'>
          <button
            className='absolute top-1 right-1'
            onClick={() => setDisplayScriptAddModal(false)}
          >
            <XMarkIcon stroke='white' strokeWidth={0.5} className="w-12 h-12" />
          </button>
          <h2 className='text-4xl'>Dodaj skrypt</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              addScript(values)
            }}
          >
            <Form className='flex flex-col text-gray-800'>
              <Field
                id="title"
                name="title"
                placeholder="Tytuł"
                type="title"
                className='w-11/12 px-3 py-2 my-6 text-2xl'
              />
              <Field
                as="textarea"
                id="code"
                name="code"
                placeholder="Kod skryptu"
                type="text"
                className='px-3 py-2 mb-8 text-xl min-h-[15rem] w-11/12 resize-none'
              />
              <button
                type="submit"
                className='px-6 py-2 text-xl font-semibold text-indigo-900 bg-white shadow w-max'
              >
                Dodaj skrypt
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default AddScriptModal;