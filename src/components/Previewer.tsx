import React, {useEffect} from 'react'
import {TiArrowMaximise} from 'react-icons/ti'
import {MdCloseFullscreen} from 'react-icons/md'
import ReactMarkdown from 'react-markdown'

interface previewerProps {
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
  previewText: {text: string}
  setPreviewText: React.Dispatch<React.SetStateAction<{text: string}>>
  editorText: {text: string}
}

const Previewer: React.FC<previewerProps> = (
  {displayPreview, 
    setDisplayPreview, 
    displayEditor,
    setDisplayEditor,
    previewText,
    setPreviewText,
    editorText
  }) => {

  const maximizeClick = () => {
    //Set the display value for Editor component
    setDisplayEditor(false)
  }
  
  const minimizeClick = () => {
    //Set the display value for Editor component
    setDisplayEditor(true)
  }

  useEffect(() => {
    console.log(editorText)
    setPreviewText((state) => ({...state, text: editorText.text}))
  }, [editorText, setPreviewText])

  let textStrings = previewText.text.split('\n')

  let paragraphs = textStrings.map((t, index: number) => {
    return <ReactMarkdown key={index}>{t}</ReactMarkdown>
  })


  return (
    <div className="preview" style={{height: (!displayEditor) ? '95vh': '60vh',display: (!displayPreview) ? 'none': ''}}>
       <div className="header">
        <p>Previewer</p>
        <div className="close-icon">
          {displayEditor ? <TiArrowMaximise  onClick={maximizeClick}/> : <MdCloseFullscreen onClick={minimizeClick}/>}
        </div>
      </div>
      <div id="preview">
        {paragraphs}
      </div>
    </div>
  )
}

export default Previewer
