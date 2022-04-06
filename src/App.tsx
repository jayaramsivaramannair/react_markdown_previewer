import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import {starterText} from './utils/starterText';


function App() {

  const [displayPreview, setDisplayPreview] = useState(true)
  const [displayEditor, setDisplayEditor] = useState(true)
  const [editorText, setEditorText] = useState({text : starterText})
  const [previewText, setPreviewText] = useState({text: ''})
  
  return (
    <div className="App">
      <h1>React Markdown Previewer</h1>
      <Editor 
        displayEditor={displayEditor}
        setDisplayEditor={setDisplayEditor}
        displayPreview={displayPreview}
        setDisplayPreview={setDisplayPreview}
        previewText={previewText}
        setPreviewText={setPreviewText}
        editorText = {editorText}
        setEditorText= {setEditorText}
      />
      <Previewer 
        displayEditor={displayEditor}
        setDisplayEditor={setDisplayEditor}
        displayPreview={displayPreview}
        setDisplayPreview={setDisplayPreview}
        previewText={previewText}
        setPreviewText={setPreviewText}
        editorText = {editorText}
      />
    </div>
  );
}

export default App;
