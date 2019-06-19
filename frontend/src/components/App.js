import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
const NOTES_URL = 'http://localhost:5000/api/v1/notes'


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      currentNotes: [],
      clickedNote: null
    }
  }

  
  searchNotes = (letters) => {
    const searchNotes = this.state.notes.filter(note => (note.title.toLowerCase().includes(letters.toLowerCase()))||(note.body.toLowerCase().includes(letters.toLowerCase())))
    console.log('searchNotes triggered')
    searchNotes === null ? this.setState({
       currentNotes: this.state.notes
    }) : this.setState({
      currentNotes: searchNotes
    })

  }

    setClickedNote = (note) => {
      this.setState({
        clickedNote: note
      })
      console.log('set a clicked note')
    }

    
    // console.log(this.state.notes.filter(note => note.title.includes(searchLetters)).concat(this.state.notes.filter(note => note.body.includes(searchLetters))))
    // const newNotes = this.state.notes.filter(note => note.title.includes(searchLetters)).concat(this.state.notes.filter(note => note.body.includes(searchLetters)))
    // this.setState({
    //   currentNotes: newNotes
    // })
    // return(
    //   this.state.notes.filter(note => note.title.includes(searchLetters)).concat(this.state.notes.filter(note => note.body.includes(searchLetters)))
    // )
  

  attachNewNote = () => {
    const note = {
      id: 12,
      title: "default",
      body: "placeholder",
      user: {
        id: 1,
        name: "flatiron"
      }
    }
    fetch(NOTES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1
      })
    }).then(resp => resp.json())
    this.setState({
      notes: [...this.state.notes, note],
      currentNotes: [...this.state.currentNotes, note]
    })
  }
  
  modifyGivenNote = givenNote => {
      const modifiedNotes = this.state.currentNotes.filter(note => note.id !=  givenNote.id)
      modifiedNotes.push(givenNote)
      this.setState({
        notes: [...this.state.notes, givenNote],
        currentNotes: modifiedNotes
      })
  }
  
  componentDidMount(){
    fetch(NOTES_URL)
    .then(resp => resp.json())
    .then(data => this.setState({
        notes: data, currentNotes: data}))
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer notes = {this.state.notes} currentNotes = {this.state.currentNotes} createNote= {this.attachNewNote} searchNotes = {this.searchNotes} clickedNote = {this.state.clickedNote} setClickedNote = {this.setClickedNote} modifyGivenNote= {this.modifyGivenNote}/>
      </div>
    );

  }
}

export default App;
