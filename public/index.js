
// const colors = {
//     GME: 'rgba(61, 161, 61, 0.7)',
//     MSFT: 'rgba(209, 4, 25, 0.7)',
//     DIS: 'rgba(18, 4, 209, 0.7)',
//     BNTX: 'rgba(166, 43, 158, 0.7)'
// }

// async function main() {
//     const timeChartCanvas = document.querySelector('#time-chart');
//     const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
//     const averagePriceChartCanvas = document.querySelector('#average-price-chart');

//     const response = await fetch("https://api.twelvedata.com/time_series?symbol=MSFT,DIS,BNTX,GME&interval=1day&apikey=d4825382148b484c91d1ba44dee435f7")

//     const result = await response.json()

// const { GME, MSFT, DIS, BNTX } = mockData;

// const stocks = [GME, MSFT, DIS, BNTX];


//     // Time Chart
//     new Chart(timeChartCanvas.getContext('2d'), {
//         type: 'line',
//         data: {
//             labels: stocks[0].values.reverse().map(value => value.datetime),
//             datasets: stocks.map(stock => ({
//                 label: stock.meta.symbol,
//                 data: stock.values.reverse().map(value => parseFloat(value.high)),
//                 backgroundColor: colors[stock.meta.symbol],
//                 borderColor: colors[stock.meta.symbol],
                
//             }))
//         }
//     });

//     // High Chart
//     new Chart(highestPriceChartCanvas.getContext('2d'), {
//         type: 'bar',
//         data: {
//             labels: stocks.map(stock => stock.meta.symbol),
//             datasets: [{
//                 label: 'Average',
//                 backgroundColor: stocks.map(stock => (
//                     colors[stock.meta.symbol]
//                 )),
//                 borderColor: stocks.map(stock => (
//                     colors[stock.meta.symbol]
//                 )),
//                 data: stocks.map(stock => (
//                     findHighest(stock.values)
//                 ))
//             }]
//         }
//     });

//     // Average Chart
//     new Chart(averagePriceChartCanvas.getContext('2d'), {
//         type: 'pie',
//         data: {
//             labels: stocks.map(stock => stock.meta.symbol),
//             datasets: [{
//                 label: 'Average',
//                 backgroundColor: stocks.map(stock => (
//                     colors[stock.meta.symbol]
//                 )),
//                 borderColor: stocks.map(stock => (
//                     colors[stock.meta.symbol]
//                 )),
//                 data: stocks.map(stock => (
//                     calculateAverage(stock.values)
//                 ))
//             }]
//         }
//     });
// }

// function findHighest(values) {
//     let highest = 0;
//     values.forEach(value => {
//         if (parseFloat(value.high) > highest) {
//             highest = value.high
//         }
//     })
//     return highest
// }

// function calculateAverage(values) {
//     let total = 0;
//     values.forEach(value => {
//         total += parseFloat(value.high)
//     })
//     return total / values.length
// }

// main()
// // Bonus Note: 
// // Another way to write the above lines would to refactor it as:
//    // const {GME, MSFT, DIS, BTNX} = result 
// // This is an example of "destructuring" an object
// // "Destructuring" creates new variables from an object or an array

const colors = {
    GME: 'rgba(61, 161, 61, 0.7)',
    MSFT: 'rgba(209, 4, 25, 0.7)',
    DIS: 'rgba(18, 4, 209, 0.7)',
    BNTX: 'rgba(166, 43, 158, 0.7)'
}
// Decided to just set the colors with const instead of a function and reduce the code amount necessary. 
async function main() {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch("https://api.twelvedata.com/time_series?symbol=MSFT,DIS,BNTX,GME&interval=1day&apikey=d4825382148b484c91d1ba44dee435f7https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&format=JSON&apikey=d4825382148b484c91d1ba44dee435f7")
// Was configuring the different settings that they had avaiable on the website. Sourced from https://twelvedata.com/request-builder 
    const result = await response.json()

const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX];


    // Time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.reverse().map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.reverse().map(value => parseFloat(value.high)),
                backgroundColor: colors[stock.meta.symbol],
                borderColor: colors[stock.meta.symbol],
                
            }))
        }
    });

    // High Chart
    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: stocks.map(stock => stock.meta.symbol),
            datasets: [{
                label: 'Average',
                backgroundColor: stocks.map(stock => (
                    colors[stock.meta.symbol]
                )),
                borderColor: stocks.map(stock => (
                    colors[stock.meta.symbol]
                )),
                data: stocks.map(stock => (
                    findHighest(stock.values)
                ))
            }]
        }
    });

    // Average Chart
    new Chart(averagePriceChartCanvas.getContext('2d'), {
        type: 'pie',
        data: {
            labels: stocks.map(stock => stock.meta.symbol),
            datasets: [{
                label: 'Average',
                backgroundColor: stocks.map(stock => (
                    colors[stock.meta.symbol]
                )),
                borderColor: stocks.map(stock => (
                    colors[stock.meta.symbol]
                )),
                data: stocks.map(stock => (
                    calculateAverage(stock.values)
                ))
            }]
        }
    });
}

function findHighest(values) {
    let highest = 0;
    values.forEach(value => {
        if (parseFloat(value.high) > highest) {
            highest = value.high
        }
    })
    return highest
}

function calculateAverage(values) {
    let total = 0;
    values.forEach(value => {
        total += parseFloat(value.high)
    })
    return total / values.length
}

main()
// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array
