import React, { Component } from 'react';
import api from '../services/api';
const NOTES_URL = 'http://localhost:5000/api/v1/notes'

class NoteEditor extends Component {
 
  constructor(props){
    super(props)
    let {title, body, id} = props.note
    
    this.state = {
      id: id,
      title: title,
      body: body
    } 
}

  updateTitle = (e) => {
    // e.preventDefault()
     this.setState({
      [e.target.name] : e.target.value
    })
  }

  updateBody = (e) => {
    // e.preventDefault()
    console.log(e.target.value)
    this.setState({
     body: e.target.value
   })
 }

 handleSubmit = (e) => {
  e.preventDefault()
   const note = {
     title: this.state.title,
     body: this.state.body,
     id: this.state.id
   }
  
    api.patchNote(note)
    .then(noteObj => this.props.modifyGivenNote(noteObj))  
      
      this.props.updateCurrentNote(note)
      this.props.toggleViewerEditor()

 }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" defaultValue={this.state.title} onChange={this.updateTitle}/>
        <textarea name="body" defaultValue={this.state.body} onChange= {this.updateBody}/>
        <div className="button-row">
          <input className="button" onClick = {this.handleSubmit} type="submit" value="Save"/>
          <button type="button" onClick= {() => this.props.toggleViewerEditor()}>Cancel</button>
          

        </div>
    </form>
    )}
}

export default NoteEditor;
