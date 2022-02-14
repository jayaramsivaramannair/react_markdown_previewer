import React from 'react'
import {TiArrowMaximise} from 'react-icons/ti'
import {MdCloseFullscreen} from 'react-icons/md'

interface previewerProps {
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
}

const Previewer: React.FC<previewerProps> = (
  {displayPreview, 
    setDisplayPreview, 
    displayEditor,
    setDisplayEditor
  }) => {

  const maximizeClick = () => {
    //Set the display value for Editor component
    setDisplayEditor(false)
  }
  
  const minimizeClick = () => {
    //Set the display value for Editor component
    setDisplayEditor(true)
  }
  return (
    <div id="preview" style={{height: (!displayEditor) ? '95vh': '60vh',display: (!displayPreview) ? 'none': ''}}>
       <div className="header">
        <p>Previewer</p>
        <div className="close-icon">
          {displayEditor ? <TiArrowMaximise  onClick={maximizeClick}/> : <MdCloseFullscreen onClick={minimizeClick}/>}
        </div>
      </div>
    </div>
  )
}

export default Previewer
