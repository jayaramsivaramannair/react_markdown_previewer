export interface EditorProps {
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
  editorText: {text: string}
  setEditorText: React.Dispatch<React.SetStateAction<{text: string}>>
}