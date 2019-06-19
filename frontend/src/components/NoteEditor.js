import React, { Component } from 'react';
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
    // this.updateTitle = this.updateTitle.bind(this)
    // this.updateBody = this.updateBody.bind(this)
   
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
   const note = {
     title: this.state.title,
     body: this.state.body,
     id: this.state.id
   }
   e.preventDefault()
   console.log('this is what will be patched')
    fetch(`${NOTES_URL}/${this.state.id}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.state.id,
          title: this.state.title,
          body: this.state.body,
          user_id: 1
        })}).then(resp => resp.json())
            .then(noteObj => {this.props.modifyGivenNote(noteObj)})  
      
      this.props.changeNoteToRender(note)
 }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" defaultValue={this.state.title} onChange={this.updateTitle}/>
        <textarea name="body" defaultValue={this.state.body} onChange= {this.updateBody}/>
        <div className="button-row">
          <input className="button" onClick = {this.handleSubmit} type="submit" value="Save"/>
          <button type="button" onClick= {() => this.props.setCancelActivated()}>Cancel</button>
        </div>
    </form>
    )}
}

export default NoteEditor;
