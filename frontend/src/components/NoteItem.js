import React, { Component } from 'react';
import Truncate from 'react-truncate'
import Content from './Content'
    
class NoteItem extends Component {
    

    render(){
      console.log(this.props.note)
      return(
      <li className = 'noteItem' onClick = {() => 
        this.props.updateClickedNote(this.props.note)}>
        <h2>{this.props.note.title}</h2>
          <Truncate lines={1} ellipsis={<span>...</span>}>
              {this.props.note.body}
          </Truncate> 
        </li>
    );
    }

}



export default NoteItem;
