import React from 'react';
import ReactDOM from 'react-dom';
import Caller from './caller.jsx';
import Fetcher from './fetchCaller.jsx';


ReactDOM.render(
  <div id="appBlock">
    enter agent profile name here
    <Caller/>
    {/* <Fetcher/> */}
  </div>,
  document.getElementById('app')
);