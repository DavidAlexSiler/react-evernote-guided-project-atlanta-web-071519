import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <button onClick={this.props.handleClickNew}>New</button>
        <NoteList notes={this.props.notes} handleClickEdit={this.props.handleClickEdit} handleClickNote={this.props.handleClickNote}/>
      </div>
    );
  }
}

export default Sidebar;
