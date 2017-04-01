function StockGenArrow(symbol) {
    var _this = this;
    this.symbol = symbol;
    setInterval(function () {
        console.log("StockGenArrow and this.symbol = " + _this.symbol);
    }, 1000);
}
var stockGenArrow = new StockGenArrow("ARROW");
function StockGenAnnonymous(symbol) {
    this.symbol = symbol;
    setInterval(function () {
        console.log("StockGenAnnonymous and this.symbol = " + this.symbol);
    });
}
//# sourceMappingURL=quote.js.map