import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  
  constructor(){
    super()
    this.state = {
      clickedNote: null
    }
  }
  
  updateClickedNote = note => {
      this.setState({
        clickedNote: note
      })
  }
  
  render() {
    return (
      <Fragment>
        <Search searchedNotes = {this.props.searchedNotes}/>
        <div className='container'>
          <Sidebar currentNotes = {this.props.currentNotes} createNote = {this.props.createNote} clickedNote = {this.state.clickedNote} updateClickedNote = {this.updateClickedNote}/>
          <Content clickedNote = {this.state.clickedNote} modifyGivenNote= {this.props.modifyGivenNote}/>
        </div>
      </Fragment>
    );
  }
}


export default NoteContainer;
