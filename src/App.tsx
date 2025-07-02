import React from 'react';
import './App.css';
import Retool from 'react-retool'

function App() {
  const url = process.env.REACT_APP_RETOOL_URL;
  if (!url) throw new Error('REACT_APP_RETOOL_URL is not defined');

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Retool url={url} height="100%" width="100%" />
    </div>
  );
}

export default App;
