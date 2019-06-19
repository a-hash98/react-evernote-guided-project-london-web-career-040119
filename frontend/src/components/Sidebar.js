import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes = {this.props.notes} currentNotes = {this.props.currentNotes} clickedNote = {this.props.clickedNote} setClickedNote = {this.props.setClickedNote}/>
        <button onClick= {this.props.createNote}>New</button>

      </div>
    );
  }
}

export default Sidebar;
