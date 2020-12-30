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

const searchCurrentPageForSeller = (arrayOfTransactions) => {

}

const scanCurrentPage = (someHtmlPromise) => {
  return new Promise( (resolve, reject) => {
    let tbody = $(someHtmlPromise).find("#pastSales").find("tbody[class='StyledTableBody-c11n-8-9-3__sc-8i1s74-0 eQWIgF']")
    let data = tbody[0].children
    let counter = 0;
    while (counter <= 4) {
      // if (data[0].children[counter][children][3]['innerHTML']) {

      // }
      console.log(JSON.stringify(data[0].children[counter]))
      console.log(`data[0].children[counter] = ${data[0].children[counter]}`)
      // console.log(`data[0].children[counter][children][3][innerHTML] = ${data[0].children[counter][children][3][innerHTML]}`)
      counter++;
    }
    resolve(data)
    reject(error)
  })
}

const scanAllPastSales = (someURL) => {
  $.get(someURL)
    .then(response => scanCurrentPage(response))
    .then(response => console.log(response[0]['children'][3]['innerHTML']))
    .catch(error => console.error(error))
};


export default scanAllPastSales;