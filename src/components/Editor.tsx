import React from 'react'
import {TiArrowMaximise} from 'react-icons/ti'
import {MdCloseFullscreen} from 'react-icons/md'

interface editorProps {
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
  editorText: {text: string}
  setEditorText: React.Dispatch<React.SetStateAction<{text: string}>>
}


const Editor : React.FC<editorProps> = (
  {
    displayEditor, 
    setDisplayEditor,
    displayPreview,
    setDisplayPreview,
    editorText,
    setEditorText,
  
  }) => {

  const maximizeClick = () => {
    //Set the value for Previewer Component
    setDisplayPreview(false)
  }

  const minimizeClick = () => {
    //Set the value for Previewer Component
    setDisplayPreview(true)
  }

  const updateText = (value: string) => {
    let textValue = value;
    setEditorText({text: textValue})
  }

  console.log(editorText)

  return (
    <div className='editor' style={{height: (!displayPreview) ? '100vh': '40vh', display: (!displayEditor) ? 'none' : ''}}>
      <div className="header">
        <p>Editor</p>
        <div className="close-icon">
          {
            displayPreview ? <TiArrowMaximise onClick={maximizeClick}/> : <MdCloseFullscreen onClick={minimizeClick}/>
          }
        </div>
      </div>
      <textarea 
        id="editor" 
        value={editorText.text} 
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) : void => updateText(e.target.value)}
      />
    </div>
  )
}

export default Editor
