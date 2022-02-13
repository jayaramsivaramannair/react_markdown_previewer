import React from 'react'
import {GrClose} from 'react-icons/gr'
import {MdCloseFullscreen} from 'react-icons/md'

function Previewer() {
  return (
    <div id="preview">
       <div className="header">
        <p>Previewer</p>
        <div className="close-icon">
          <GrClose />
        </div>
      </div>
    </div>
  )
}

export default Previewer
