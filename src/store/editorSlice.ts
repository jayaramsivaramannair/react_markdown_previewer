import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  text: string
}


const initialState: EditorState = {
  text: ''
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})


export const {update} = editorSlice.actions

export default editorSlice.reducer