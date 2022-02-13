import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  return (
    <div className="App">
      <h1>React Markdown Previewer</h1>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
