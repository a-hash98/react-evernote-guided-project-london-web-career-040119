import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  console.log(props.note)
  console.log(props.newNote)
  return (
    props.newNote !== null ? 
    <Fragment>
    <h2>{props.newNote.title}</h2>
    <p>{props.newNote.body}</p>
    <button onClick = {() => {
      props.setEditNote(props.newNote)
      // props.setCancelActivated()
      }}>Edit</button>
  </Fragment>
  : <Fragment>
  <h2>{props.note.title}</h2>
  <p>{props.note.body}</p>
  <button onClick = {() => {
    props.setEditNote(props.note)
    props.setCancelActivated()
    }}>Edit</button>
</Fragment>
  ) 
}

export default NoteViewer;
