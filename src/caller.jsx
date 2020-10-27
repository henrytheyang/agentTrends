import React from 'React';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Status from './status';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
let profileName = 'jessecyang';

class Caller extends React.Component {
  constructor(props) {
    super(props);
    let url = `https://www.zillow.com/profile/${profileName}/`;
    // let url = `https://www.zillow.com/profile/jessecyang/`;
    this.state = {
      agentProfile: `${proxyurl + url}`,
      agentProfileHtml: ``,
      agentZuid: ``,
      agentDataUrl: `${proxyurl}https://www.zillow.com/ajax/profiles/ProfileMapResultsAsync.htm?&encZuid=X1-ZUylir7sxs3w21_9y704&W=-124220634&S=32916485&E=-114722109&N=41705729&publicView=true`,
      agentData: [],
      status: ['GRABBING PROFILE FROM SOURCE']
    };
  }
  componentDidMount() {
    this.dataCall();
  }
  componentWillUnmount() {

  }
  dataCall() {
    console.log(`agentProfile = ${this.state.agentProfile}`)
    $.ajax({
      url: `${this.state.agentProfile}`,
      success: (result) => {
        this.setState({status: this.state.status.concat(['GRABBING TRANSACTION DATA'])})
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
    this.populateAgentData(this.state.agentZuid);
  }
  populateAgentData(zuid) {
    $.ajax({
      url: `${proxyurl}https://www.zillow.com/ajax/profiles/ProfileMapResultsAsync.htm?&encZuid=${zuid}&W=-124220634&S=32916485&E=-114722109&N=41705729`,
      success: (result) => {
        console.log(`populateAgentData success`);
        console.log(`typeof result = ${typeof result}`)
        // console.log(JSON.stringify(result.tx[0]));
        // console.log(result.tx[0]);
        this.setState({agentData: result.tx});
      },
      error: (result) => {
        console.log(result);
      }
    })
  }
  render() {
    return (
      <div>
        <Status status={this.state.status}/>
        <div>stringified agentData = {JSON.stringify(this.state.agentData)}</div>
      </div>
    )
  }
}

export default Caller;