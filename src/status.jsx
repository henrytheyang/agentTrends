import React from 'react'

let Status = (props) => {
  return (
    <div>
      <div>{props.status.map(item => (
        <h3>{item}</h3>
      ))}</div>
    </div>
  );
}

export default Status