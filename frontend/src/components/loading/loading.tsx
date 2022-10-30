import React from 'react';
import ReactLoading from 'react-loading';

const Loading: React.FC = () => {
  return (
    <ReactLoading
      type='bubbles'
      color='#fff'
      height={'100%'}
      width={'100%'}
    />
  )
}

export default Loading;