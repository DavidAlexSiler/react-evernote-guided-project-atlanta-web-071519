import React from 'react';

const NoteItem = (props) => (
  <li id={props.note.id} onClick={(e) => props.handleClickNote(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 50).concat('...')}</p>
  </li>
);

export default NoteItem;
