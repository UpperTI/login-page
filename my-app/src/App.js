import React, { useState } from 'react';
import Form from './Form';

import './App.css';

function App() {
  return (
    <>
    <div className='form-components'>
      <div className='sign-container'>
          <h1>Sign in</h1>
        <div className='form-container'>
          <Form></Form> 
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
