import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    props.currentNote !== null ? 
    <Fragment>
    <h2>{props.currentNote.title}</h2>
    <p>{props.currentNote.body}</p>
    <button onClick = {() => {
      props.updateCurrentNote(props.currentNote)
      props.toggleViewerEditor()
      }}>Edit</button>
  </Fragment> : 
    <Fragment>
    <h2>{props.note.title}</h2>
    <p>{props.note.body}</p>
    <button onClick = {() => {
      props.updateCurrentNote(props.note)
      props.toggleViewerEditor()
      }}>Edit</button>
  </Fragment>

  ) 
}

export default NoteViewer;
