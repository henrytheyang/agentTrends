import React from 'React';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {profileName: ''};
  }
  componentDidMount() {
    this.dataCall();
  }
  componentWillUnmount() {

  }

  dataCall() {
    $.ajax({
      url: "https://www.zillow.com/profile/jessecyang/",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      success: (result) => {
        console.log(result);
      },
      error: (result) => {
        console.log(result);
      }
    })
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