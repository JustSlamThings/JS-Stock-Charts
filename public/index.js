async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

fetch ("https://api.twelvedata.com/time_series?symbol=MSFT,DIS,BNTX,GME&interval=1day&type=stock&format=JSON&dp=5&timezone=America/New_York&apikey=d4825382148b484c91d1ba44dee435f7", {


}
main()

let GME = result.GME
let MSFT = result.MSFT
let DIS = result.DIS
let BTNX = result.BTNX

const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array
