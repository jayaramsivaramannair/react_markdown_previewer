import React from 'react'
import {TiArrowMaximise} from 'react-icons/ti'
import {MdCloseFullscreen} from 'react-icons/md'
import Markdown from 'marked-react';
import {PreviewerProps} from '../utils/PreviewerProps';

class Previewer extends React.Component<PreviewerProps, {}> {
  constructor(props: PreviewerProps) {
    super(props)

    this.maximizeClick = this.maximizeClick.bind(this)
    this.minimizeClick = this.minimizeClick.bind(this)
  }

  maximizeClick () {
    //Set the display value for Editor component
    this.props.setDisplayEditor(false)
  }

  minimizeClick() {
    //Set the display value for Editor component
    this.props.setDisplayEditor(true)
  }

  componentDidMount() {
    this.props.setPreviewText({text: this.props.editorText.text})
  }

  componentDidUpdate(prevProps: PreviewerProps) {
    if (this.props.editorText.text !== prevProps.editorText.text) {
      this.props.setPreviewText({text: this.props.editorText.text})
    }
  }

  render () {
    let textStrings = this.props.editorText.text
    return (
      <div className="preview" style={{height: (!this.props.displayEditor) ? '100vh': '55vh',display: (!this.props.displayPreview) ? 'none': ''}}>
       <div className="header">
        <p>Previewer</p>
        <div className="close-icon">
          {this.props.displayEditor ? <TiArrowMaximise  onClick={this.maximizeClick}/> : <MdCloseFullscreen onClick={this.minimizeClick}/>}
        </div>
      </div>
      <div id = "preview">
        <Markdown value={textStrings} gfm={true} breaks={true}/>
      </div>
      </div>
    )
  }
}


export default Previewer;
