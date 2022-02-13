import React from 'react'
import {GrClose} from 'react-icons/gr'
import {MdCloseFullscreen} from 'react-icons/md'


function Editor() {
  return (
    <div id="editor">
      <div className="header">
        <p>Editor</p>
        <div className="close-icon">
          <GrClose />
        </div>
      </div>
    </div>
  )
}

export default Editor
