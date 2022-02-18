import React from 'react'
import {TiArrowMaximise} from 'react-icons/ti'
import {MdCloseFullscreen} from 'react-icons/md'
import {EditorProps} from '../utils/EditorProps';

class Editor extends React.Component<EditorProps, {}> {
  constructor (props: EditorProps) {
    super(props);
    this.maximizeClick = this.maximizeClick.bind(this)
    this.minimizeClick = this.minimizeClick.bind(this)
    this.updateText = this.updateText.bind(this)
  }

  maximizeClick(){
    //Set the value for Previewer Component
    this.props.setDisplayPreview(false)
  }

  minimizeClick(){
    //Set the value for Previewer Component
    this.props.setDisplayPreview(true)
  }

  updateText(value: string){
    let textValue = value;
    this.props.setEditorText({text: textValue})
  }

  render () {
    return (
      <div className='editor' style={{height: (!this.props.displayPreview) ? '100vh': '40vh', display: (!this.props.displayEditor) ? 'none' : ''}}>
        <div className="header">
          <p>Editor</p>
          <div className="close-icon">
            {
              this.props.displayPreview ? <TiArrowMaximise onClick={this.maximizeClick}/> : <MdCloseFullscreen onClick={this.minimizeClick}/>
            }
          </div>
        </div>
        <textarea 
          id="editor" 
          value={this.props.editorText.text} 
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) : void => this.updateText(e.target.value)}
        />
      </div>
    )
  }

}

export default Editor
