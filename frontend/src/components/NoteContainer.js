import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  
  
  render() {
    return (
      <Fragment>
        <Search searchNotes = {this.props.searchNotes} notes = {this.props.notes}/>
        <div className='container'>
          <Sidebar notes = {this.props.notes} currentNotes = {this.props.currentNotes} createNote = {this.props.createNote} clickedNote = {this.props.clickedNote} setClickedNote = {this.props.setClickedNote}/>
          <Content clickedNote = {this.props.clickedNote} modifyGivenNote= {this.props.modifyGivenNote}/>
        </div>
      </Fragment>
    );
  }
}


export default NoteContainer;
