import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  
  constructor(props){
    super(props)
    let noteToRender = props.clickedNote
    this.state = {
      noteToEdit: null,
      cancelActivated: false,
      noteToRender: noteToRender
    }
  }

  changeNoteToRender = note => {
    this.setState({
      noteToRender: note
    })
  }
  
  setEditNote = (note) => {
    console.log('note state should be set here')
    this.setState({
      noteToEdit: note,
      noteToRender: null
    })
  }

  

  setCancelActivated = () => {
    this.setState({
      cancelActivated: !this.state.cancelActivated
    })
    console.log('inside setCancelActivated')
  }
  

  renderContent = () => {
    //console.log(this.state.noteToRender === this.props.clickedNote)
    // console.log(this.props)
    //console.log(this.state.noteToRender)
    //console.log(this.props.clickedNote)
    console.log(this.state.noteToEdit)
    console.log(this.state.noteToRender)
    console.log(this.state.cancelActivated)
    if (this.props.clickedNote === null) {
      return <Instructions />
    }
    if (this.state.noteToEdit === null || this.state.noteToRender !== null || !this.state.cancelActivated){
      console.log("condition 1")
    // if (this.state.noteToEdit === null || !this.state.cancelActivated || this.state.noteToRender){
      return <NoteViewer note = {this.props.clickedNote} cancelActivated = {this.state.cancelActivated} setCancelActivated = {this.setCancelActivated} setEditNote = {this.setEditNote} newNote = {this.state.noteToRender}/>
    } 
    console.log("condition 2")
    return <NoteEditor note = {this.state.noteToEdit} newNote = {this.state.noteToRender} cancelActivated = {this.state.cancelActivated} setCancelActivated = {this.setCancelActivated} modifyGivenNote= {this.props.modifyGivenNote} setEditNote = {this.setEditNote} changeNoteToRender = {this.changeNoteToRender}/>
    

  }


    // this.props.clickedNote === null ? <Instructions /> : <NoteViewer note = {this.props.clickedNote} setEditNote = {this.props.setEditNote}/>
    // if (false) {
    //   return <NoteEditor  />;
    // } else if (false) {
    //   return <NoteViewer note = {this.props.note} />;
    // } else {
    //   return <Instructions />;
    // }
    
  
  
  render() {
    return (
      this.renderContent()
    // return (
    //   <div className='master-detail-element detail'>
    //    if (this.props.clickedNote === null ? <Instructions /> : <NoteViewer note = {this.props.clickedNote} setEditNote = {this.setEditNote} /> }
    //    <NoteEditor note = {this.state.noteToEdit}/>
    //    {/* { this.state.noteToEdit !== null ? <NoteEditor note = {this.state.noteToEdit}/> : null} */}
    //     {/* {this.renderContent()} */}
    //   </div>
    // );
    )
}

}

export default Content;
