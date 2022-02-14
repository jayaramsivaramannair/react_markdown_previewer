import React from 'react'
import {TiArrowMaximise} from 'react-icons/ti'
import {MdCloseFullscreen} from 'react-icons/md'

interface editorProps {
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
}


const Editor : React.FC<editorProps> = (
  {
    displayEditor, 
    setDisplayEditor,
    displayPreview,
    setDisplayPreview,
  
  }) => {

  const maximizeClick = () => {
    //Set the value for Previewer Component
    setDisplayPreview(false)
  }

  const minimizeClick = () => {
    //Set the value for Previewer Component
    setDisplayPreview(true)
  }

  return (
    <div className='editor' style={{height: (!displayPreview) ? '95vh': '30vh', display: (!displayEditor) ? 'none' : ''}}>
      <div className="header">
        <p>Editor</p>
        <div className="close-icon">
          {
            displayPreview ? <TiArrowMaximise onClick={maximizeClick}/> : <MdCloseFullscreen onClick={minimizeClick}/>
          }
        </div>
      </div>
      <textarea id="editor"/>
    </div>
  )
}

export default Editor
