import $ from 'jquery';
import dummyData from './dummyData.html';

// Note: switch to regex for optimization later

let agentData = [];
let createTxNode = (someDate, someListPrice, someSalePrice, someTimeOnMarket) => {
  return {
    date: someDate,
    listPrice: someListPrice,
    salePrice: someSalePrice,
    timeOnMarket: someTimeOnMarket,
  }
}

const nextPage = () => {
  $("button[title='Next page']").trigger("click")
}

const scanCurrentPage = (someHtml) => {
  return new Promise( (resolve, reject) => {
    $(someHtml).find("section").filter("#pastSales")
    resolve(response)
  })
}

const scanAllPastSales = (someURL) => {
  console.log('scanAllPastSales test');

  $.get(someURL)
    .then(response => $(response).find("section").filter("#pastSales"))
    // tbody child w/ rows class name is ".StyledTableBody-c11n-8-9-3__sc-8i1s74-0 eQWIgF"
    .then(response => console.log(response))

  // $.get(someURL)
  //   .then(response => scanCurrentPage(response))
};


export default scanAllPastSales;