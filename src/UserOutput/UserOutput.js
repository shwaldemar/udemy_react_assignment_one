import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>User Name: {props.currentName}</p>
    </div>
  )
}
export default UserOutput;
