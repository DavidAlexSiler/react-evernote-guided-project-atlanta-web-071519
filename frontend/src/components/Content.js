import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  

  renderContent = () => {
    if (this.props.display === 'edit') {
      return <NoteEditor note={this.props.editedNote} handleClickCancel={this.props.handleClickCancel} makeEdits={this.props.makeEdits} handleSubmit={this.props.handleSubmit}/>
    } else if (this.props.display === 'new'){
      return <NoteEditor note={this.props.newNote} handleClickCancel={this.props.handleClickCancel} makeEdits={this.props.makeEdits} handleSubmit={this.props.handleSubmit}/> 
    } else if (this.props.display === 'display') {
        return <NoteViewer note={this.props.selectedNote} handleClickEdit={(e) => this.props.handleClickEdit(e)} />;
    } else if (this.props.display === 'instruction') {
        return <Instructions />;
    }
  }

  
  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
  
}

export default Content;
