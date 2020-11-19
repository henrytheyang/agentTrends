import $ from 'jquery';
import dummyData from './dummyData.html';

const scanPastSales = () => {
  console.log('scanPastSales test');
  // console.log(`dummyData = ${dummyData}`)
  // $(dummyData).ready(() => {
  //   $("section").filter("#pastSales");
  // })
  $.get('https://cors-anywhere.herokuapp.com/https://www.zillow.com/profile/jessecyang')
    .then(response => console.log(response));
};


export default scanPastSales;