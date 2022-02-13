import React from 'react'
import {GrClose} from 'react-icons/gr'
import {MdCloseFullscreen} from 'react-icons/md'

interface previewerProps {
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
}

const Previewer: React.FC<previewerProps> = ({displayPreview, setDisplayPreview}) => {
  return (
    <div id="preview">
       <div className="header">
        <p>Previewer</p>
        <div className="close-icon">
          {displayPreview ? <GrClose /> : <MdCloseFullscreen />}
        </div>
      </div>
    </div>
  )
}

export default Previewer
