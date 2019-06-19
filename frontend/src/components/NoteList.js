import React, { Fragment } from 'react';
import NoteItem from './NoteItem';
import Content from './Content'

const NoteList = (props) => {
  
  const handleClick = note => {
        {console.log('i was clicked')}
        // <Content note = {note}/>
  }
  const handleClickTwo = () => {
    {console.log('clicked')}
  }

  return (
    <ul>
      {props.currentNotes.map(note => 
          <NoteItem note = {note} clickedNote = {props.clickedNote} setClickedNote = {props.setClickedNote}/>
      )}
    </ul>
  );
}

export default NoteList;
