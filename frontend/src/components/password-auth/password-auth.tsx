import React from 'react';
 import {
   Formik,
   Form,
   Field
 } from 'formik';
 import { usePasswordAuth } from '../../hooks';

const PasswordAuth: React.FC = () => {
  const { initialValues, handleSubmit, isAuthorized } = usePasswordAuth()

  return (
    <div className='grid w-screen h-screen bg-gradient-to-br from-indigo-800 to-indigo-900 place-items-center'>
      <div className='grid place-items-center'>
        <p className='text-4xl font-semibold text-white'>Podaj hasło</p>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values)
          }}
        >
          <Form className='flex flex-col'>
            <Field
              id="password"
              name="password"
              placeholder="Hasło"
              type="password"
              className='p-2 my-5 text-3xl text-center text-white bg-transparent border-b-2 border-white rounded-lg focus:outline-none'
            />
            <button
              type="submit"
              className='px-6 py-2 mx-auto mt-3 text-xl font-semibold text-indigo-900 bg-white shadow w-min rounded-xl'
            >
              Sprawdź
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default PasswordAuth;