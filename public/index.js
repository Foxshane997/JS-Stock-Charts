async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const apiUrl = `https://api.twelvedata.com/stocks`
    let response = await fetch(apiUrl)
    let stocks = response.json()

    let { GME, MSFT, DIS, BNTX } = stocks

    

    return stocks
}

    main().then(stocks => {
        console.log(stocks.data[0])
    })