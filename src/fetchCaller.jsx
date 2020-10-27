import React from 'React';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Status from './status';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
// let profileName = 'jessecyang';

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    // let url = `https://www.zillow.com/profile/${profileName}/`;
    // let url = `https://www.zillow.com/profile/jessecyang/`;
    this.state = {
      // agentProfile: `${proxyurl + url}`,
      agentProfile: `https://www.zillow.com/profile/jessecyang/`,
      agentProfileHtml: ``,
      agentZuid: ``,
      agentDataUrl: `${proxyurl}https://www.zillow.com/ajax/profiles/ProfileMapResultsAsync.htm?&encZuid=X1-ZUylir7sxs3w21_9y704&W=-124220634&S=32916485&E=-114722109&N=41705729&publicView=true`,
      agentData: [],
    };
  }
  componentDidMount() {
    this.dataCall();
  }
  componentWillUnmount() {

  }
  dataCall() {
    console.log(`agentProfile = ${this.state.agentProfile}`)
    fetch(`${this.state.agentProfile}`, {
      mode: 'no-cors',
    })
      // .then(console.log('dataCall fetch completed'))
      // .then(result => console.log(`result = ${result}`))
      .then(response => {
        console.log(`response = ${JSON.stringify(response)}`)
        this.grabZuid(response);
      })
      .then(response => this.setState({agentProfileHtml: response}))
  }
  grabZuid(data) {
    // Search for "Zui" then skip two (d=) and grab the next 23 characters
    // populateAgentData(SOMEZUID);
    console.log(`grabZuid data = ${(data)}`);
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
    this.populateAgentData(this.state.agentZuid);
  }
  populateAgentData(zuid) {
    fetch(`https://www.zillow.com/ajax/profiles/ProfileMapResultsAsync.htm?&encZuid=${zuid}&W=-124220634&S=32916485&E=-114722109&N=41705729`, {
      mode: 'no-cors',
    })
      .then(response => this.setState({agentData: response.tx}))
  }
  render() {
    return (
      <div>
        <Status/>
        <div>agentZuid = {this.state.agentZuid}</div>
        <div>stringified agentData = {JSON.stringify(this.state.agentData)}</div>
      </div>
    )
  }
}

export default Fetcher;