import React from 'react';

const UserInput = (props) => {
//inline styling
let style = {
  border: '2px solid green',
}
  return (
    <div >
    <input
    onChange={props.inputChange}
    value={props.currentName}/>
    </div>
  );
}
export default UserInput;
