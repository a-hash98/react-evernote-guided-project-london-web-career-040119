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
    // let currentNote = props.clickedNote
    this.state = {
      currentNote: null,
      callNoteViewer: true,
      callNoteEditor: false
    }
  }
 
 updateCurrentNote = note => {
    this.setState({
      currentNote: note
    })
    // this.renderContent()
  }

  toggleViewerEditor = () => {
    this.setState({
      callNoteViewer: !this.state.callNoteViewer,
      callNoteEditor: !this.state.callNoteEditor
    })
    this.renderContent()
  }
  
  renderContent = () => {
    if (this.props.clickedNote === null) {
      return <Instructions />
    }
    if (this.state.callNoteViewer){
      console.log("calling note viewer")
      return <NoteViewer note = {this.props.clickedNote} currentNote = {this.state.currentNote} updateCurrentNote = {this.updateCurrentNote} toggleViewerEditor = {this.toggleViewerEditor} callNoteViewer = {this.state.callNoteViewer} callNoteEditor = {this.state.callNoteEditor}/>
    }
    if (this.state.callNoteEditor){ 
      console.log("calling note editor")
      return <NoteEditor note = {this.state.currentNote} updateCurrentNote = {this.updateCurrentNote} toggleViewerEditor = {this.toggleViewerEditor} callNoteViewer = {this.state.callNoteViewer} callNoteEditor = {this.state.callNoteEditor} modifyGivenNote= {this.props.modifyGivenNote} />
    }

  }

  render() {
    return (
      this.renderContent()
    )
}

}

export default Content;
