import React from 'React';
import ReactDOM from 'react-dom';

class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {profileName: ''};
  }
  render() {
    return (
      <div>
        <h1>Here is where we will display profile info</h1>
      </div>
    )
  }
}

export default Caller;