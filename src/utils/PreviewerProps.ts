export interface PreviewerProps {
  displayPreview: boolean
  setDisplayPreview: React.Dispatch<React.SetStateAction<boolean>>
  displayEditor: boolean
  setDisplayEditor: React.Dispatch<React.SetStateAction<boolean>>
  previewText: {text: string}
  setPreviewText: React.Dispatch<React.SetStateAction<{text: string}>>
  editorText: {text: string}
}