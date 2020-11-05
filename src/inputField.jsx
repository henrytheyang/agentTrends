import React from 'React';
import ReactDOM from 'react-dom';

let TextInput = (props) => {
  return (
    <form>
      <label>
        {/* <input type="text" value={props.text}  /> */}
        <input type="text" placeholder='Enter agent profile name' onChange={props.handleChange} onSubmit={props.handleSubmit}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TextInput