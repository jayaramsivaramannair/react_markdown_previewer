import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  const [displayEditor, setDisplayEditor] = useState(true)
  const [displayPreview, setDisplayPreview] = useState(true)
  return (
    <div className="App">
      <h1>React Markdown Previewer</h1>
      <Editor 
        displayEditor={displayEditor}
        setDisplayEditor={setDisplayEditor}
      />
      <Previewer 
        displayPreview={displayPreview}
        setDisplayPreview={setDisplayPreview}
      />
    </div>
  );
}

export default App;
