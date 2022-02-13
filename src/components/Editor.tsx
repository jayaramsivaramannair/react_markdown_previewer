import React from 'react'
import {GrClose} from 'react-icons/gr'
import {MdCloseFullscreen} from 'react-icons/md'

interface editorProps {
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
}


const Editor : React.FC<editorProps> = ({displayEditor, setDisplayEditor}) => {
  return (
    <div id="editor">
      <div className="header">
        <p>Editor</p>
        <div className="close-icon">
          {
            displayEditor ? <GrClose /> : <MdCloseFullscreen />
          }
          
        </div>
      </div>
    </div>
  )
}

export default Editor
