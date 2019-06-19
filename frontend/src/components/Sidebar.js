import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList currentNotes = {this.props.currentNotes} clickedNote = {this.props.clickedNote} updateClickedNote = {this.props.updateClickedNote}/>
        <button onClick= {this.props.createNote}>New</button>

      </div>
    );
  }
}

export default Sidebar;
