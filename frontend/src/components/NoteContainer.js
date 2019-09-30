import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  //setting up state and things
  constructor() {
    super()
    this.state = {
      userContents: [],
      searchTerm: '',
      display: 'instruction',
      selectedNote: {
        title: '',
        body: '',
        id: ''
      },
      editedNote: {
        title: '',
        body: '',
        id: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(data => this.setState({ userContents: data }))
  }



  //display note
  handleClickNote = (e) => {
    this.setState({
      display: 'display',
      selectedNote: {
        title: e.title,
        body: e.body,
        id: e.id
      },
      editedNote: {
        title: e.title,
        body: e.body,
        id: e.id
      }
    })
  }



  //making edits
  handleClickEdit = (e) => {
    this.setState({
      display: 'edit',
      editedNote: {
        title: this.state.editedNote.title,
        body: this.state.editedNote.body,
        id: this.state.editedNote.id
      }

    })
  }


  makeEdits = (e) => {
    const key = e.target.name
    if(key==='title'){
      this.setState({
        editedNote: {
          title: e.target.value
        }
      })
    }else{
      this.setState({
        editedNote: {
          body: e.target.value
        }
      })
    }

  }


  // cancel
  handleClickCancel = (e) => {
    if(window.confirm('Are you sure you want to discard changes? All unsaved edits will be lost.')){

      this.setState({
        display: 'instruction'
      })
      }else{
      this.setState({
        display: 'edit',
        selectedNote: {
          title: this.state.newNote,
          body: this.state.newNote,
          id: this.state.newNote
        }
      })
      
    }
  }


  //create new
  handleClickNew = (e) => {
    this.setState({
      display: 'new'
    })
  }

  newNote = (e) => {
    if(this.state.display === 'new'){
      return this.setState({
        selectedNote: {
          title: '',
          body: '',
          id: ''
        },
        editedNote: {
          title: '', 
          body: '',
          id: ''
        }
      })
    }
  }
  
  //submit
  handleSubmit = (e) => {
    e.preventDefault()
    // const {title, body, id} = e.target
    fetch(`http://localhost:3000/api/v1/notes/${e.target.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.editedNote.title,
        body: this.state.editedNote.body,
        id: this.state.editedNote.id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
    .then(console.log)
  }

  //search
  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
    
    
  }
  

  render() {
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch}/>
        <div className='container'>
          {this.state.userContents.map((notes, i) => <Sidebar key={i} notes={notes.notes} handleClickNote={this.handleClickNote} handleClickNew={this.handleClickNew}/>)}
          <Content 
          display={this.state.display} 
          editedNote={this.state.editedNote} 
          makeEdits={this.makeEdits} 
          newNote = {this.newNote}
          selectedNote={this.state.selectedNote} 
          handleClickEdit={this.handleClickEdit} 
          handleClickCancel={this.handleClickCancel} 
          handleSubmit={this.handleSubmit}
          
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
