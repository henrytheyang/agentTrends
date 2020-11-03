import React from 'React';
import ReactDOM from 'react-dom';

let TextInput = (props) => {
  return (
    <label>
      {/* <input> placeHolder={props.text}</input> */}
      {/* <input type="text" value={props.text}  /> */}
      <input type="text" placeholder='Enter agent profile name'  />
    </label>
  );
}

export default TextInput