import React from 'React';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Caller extends React.Component {
  constructor(props) {
    super(props);
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    let url = 'https://www.zillow.com/profile/jessecyang/';
    this.state = {
      agentProfile: `${proxyurl + url}`,
      agentProfileHtml: ``,
      agentZuid: ``,
      agentDataUrl: `${proxyurl}https://www.zillow.com/ajax/profiles/ProfileMapResultsAsync.htm?&encZuid=X1-ZUylir7sxs3w21_9y704&W=-124220634&S=32916485&E=-114722109&N=41705729&publicView=true`,
      agentData: `Placeholder`,
    };
  }
  componentDidMount() {
    this.dataCall();
  }
  componentWillUnmount() {

  }
  dataCall() {
    $.ajax({
      url: `${this.state.agentProfile}`,
      success: (result) => {
        this.grabZuid(result);
        this.setState({agentProfileHtml: result});
      },
      error: (result) => {
        console.log(result);
      }
    })
  }
  grabZuid(data) {
    // Search for "Zui" then skip two (d=) and grab the next 23 characters
    // populateAgentData(SOMEZUID);
    let zuid = '';
    let i;
    for (i = 0; i < data.length - 1; i++) {
      if (data[i] === 'Z' && data[i + 1] === 'u' && data[i + 2] === 'i') {
        zuid = data.slice(i + 7, i + 30);
        console.log(`zuid = ${zuid}`);
        this.setState({agentZuid: zuid});
        break;
      }
    }
    this.populateAgentData(`PLACEHOLDER`);
  }
  populateAgentData(zuid) {
    console.log('in populateAgentData');
    $.ajax({
      url: this.state.agentDataUrl,
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
        <div>{this.state.agentData}</div>
    <div>agentZuid = {this.state.agentZuid}</div>
      </div>
    )
  }
}

export default Caller;