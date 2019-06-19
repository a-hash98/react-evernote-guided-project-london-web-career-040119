import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import getNotes from '../services/api'
import api from '../services/api'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      currentNotes: []
    }
  }

  componentDidMount(){
    api.getNotes()
    .then(data => this.setState({
        notes: data, currentNotes: data}))
  }

  searchedNotes = (letters) => {
    const searchNotes = this.state.notes.filter(note => (note.title.toLowerCase().includes(letters.toLowerCase()))||(note.body.toLowerCase().includes(letters.toLowerCase())))
    searchNotes === null ? this.setState({
       currentNotes: this.state.notes
    }) : this.setState({
      currentNotes: searchNotes
    })
  }

    addNewNote = () => {
    const note = {
      id: 12,
      title: "default",
      body: "placeholder",
      user: {
        id: 1,
        name: "flatiron"
      }
    }
    api.postNote(note)
    this.setState({
      notes: [...this.state.notes, note],
      currentNotes: [...this.state.currentNotes, note]
    })
  }
  
  modifyGivenNote = givenNote => {
     //remove old version of givenNote by id
      const modifiedNotes = this.state.currentNotes.filter(note => note.id !==  givenNote.id)
     // add new version of givenNote
      modifiedNotes.push(givenNote)
      //update state
      this.setState({
        notes: [...this.state.notes, givenNote],
        currentNotes: modifiedNotes
      })
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer currentNotes = {this.state.currentNotes} createNote= {this.addNewNote} searchedNotes = {this.searchedNotes} modifyGivenNote= {this.modifyGivenNote}/>
      </div>
    );

  }
}

export default App;
