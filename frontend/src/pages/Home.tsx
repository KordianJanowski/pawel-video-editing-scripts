import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_SCRIPTS } from '../api/queries';

const Home: React.FC = () => {
  const { data } = useQuery(GET_SCRIPTS)

  if(data) {
    console.log(data.scripts.data)
  }

  return (
    <div>
      Home page
    </div>
  )
}

export default Home;