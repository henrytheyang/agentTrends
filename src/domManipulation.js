import $ from 'jquery';
import dummyData from './dummyData.html';

// Note: switch to regex for optimization later

const scanPastSales = () => {
  console.log('scanPastSales test');
  // console.log(`dummyData = ${dummyData}`)
  // $(dummyData).ready(() => {
  //   $("section").filter("#pastSales");
  // })
  $.get('https://cors-anywhere.herokuapp.com/https://www.zillow.com/profile/jessecyang')
    .then(response => $(response).find("section").filter("#pastSales"))
    // tbody child w/ rows class name is ".StyledTableBody-c11n-8-9-3__sc-8i1s74-0 eQWIgF"
    .then(response => console.log(response))
};


export default scanPastSales;