import React from 'React';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Status from './status';
import TextInput from './inputField';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = `https://www.zillow.com/profile/`;

class Caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: 'jessecyang',
      agentProfile: `${proxyurl + url}`,
      agentProfileHtml: ``,
      agentZuid: ``,
      agentDataUrl: `${proxyurl}https://www.zillow.com/ajax/profiles/ProfileMapResultsAsync.htm?&encZuid=X1-ZUylir7sxs3w21_9y704&W=-124220634&S=32916485&E=-114722109&N=41705729&publicView=true`,
      agentData: [],
      status: ['Grabbing Profile From Source']
    };
  }
  componentDidMount() {
    this.dataCall();
  }
  componentWillUnmount() {

  }
  dataCall() {
    console.log(`agentProfile = ${this.state.agentProfile + this.state.profileName}`)
    $.ajax({
      url: `${this.state.agentProfile + this.state.profileName}`,
      success: (result) => {
        this.setState({status: this.state.status.concat(['Grabbing Transaction Data'])})
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
        let numTransactions = Object.keys(result.tx).length;
        this.setState({status: this.state.status.concat([`${numTransactions} transactions found`])})
        console.log(`# of transactions = ${numTransactions}`);
      },
      error: (result) => {
        console.log(result);
      }
    })
  }
  render() {
    return (
      <div>
        <TextInput text={this.state.profileName}/>
        <Status status={this.state.status}/>
        <div>stringified agentData = {JSON.stringify(this.state.agentData)}</div>
      </div>
    )
  }
}

export default Caller;