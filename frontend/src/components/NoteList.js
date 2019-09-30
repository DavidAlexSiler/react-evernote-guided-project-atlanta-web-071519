import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map((note, i) => <NoteItem key={note.id} note={note} handleClickEdit={props.handleClickEdit} handleClickNote={props.handleClickNote}/>)}
    </ul>
  );
}

export default NoteList;
