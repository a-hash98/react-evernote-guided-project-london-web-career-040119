import React, { Fragment } from 'react';
import NoteItem from './NoteItem';
import Content from './Content'

const NoteList = (props) => {
  

  return (
    <ul>
      {props.currentNotes.map(note => 
        <NoteItem note = {note} clickedNote = {props.clickedNote} updateClickedNote = {props.updateClickedNote}/>
      )}
    </ul>
  );
}

export default NoteList;
