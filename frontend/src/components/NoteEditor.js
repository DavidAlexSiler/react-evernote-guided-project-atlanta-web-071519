import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    const { title, body, id } = this.props.note
    return (
      <form className="note-editor" onSubmit={this.props.handleSubmit} id={id}>
        <input type="text" name="title" value={title} onChange={(e) => this.props.makeEdits(e)} placeholder={'Your title here'}/>
        <textarea name="body" value={body} onChange={(e) => this.props.makeEdits(e)} placeholder={'Your notes here'}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={(e) => this.props.handleClickCancel(e)}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
