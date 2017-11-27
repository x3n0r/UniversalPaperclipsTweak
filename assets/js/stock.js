/**
 * Stock Investments
 */

var stocks = [];
var alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
		"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var portfolioSize = 0;
var stockID = 0;
var secTotal = 0;
var portTotal = 0;
var sellDelay = 0;
var riskiness = 5;
var maxPort = 5;
var m = 0;
var investLevel = 0;
var investUpgradeCost = 100;
var stockGainThreshold = .5;
var ledger = 0;
var stockReportCounter = 0;

function investUpgrade() {
	yomi = yomi - investUpgradeCost;
	investLevel++;
	investmentLevelElement.innerHTML = investLevel;
	stockGainThreshold = stockGainThreshold + .01;
	investUpgradeCost = Math.floor(Math.pow(investLevel + 1, Math.E) * 100);
	investUpgradeCostElement.innerHTML = formatWithCommas(investUpgradeCost);
	yomiDisplayElement.innerHTML = formatWithCommas(yomi);
	displayMessage("Investment engine upgraded, expected profit/loss ratio now "
			+ stockGainThreshold);
}

function investDeposit() {
	ledger = ledger - Math.floor(funds);
	bankroll = Math.floor(bankroll + funds);
	funds = 0;
	investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
	fundsElement.innerHTML = formatWithCommas(funds, 2);
	portValueElement.innerHTML = formatWithCommas(portTotal);
}

function investWithdraw() {
	ledger = ledger + bankroll;
	funds = funds + bankroll;
	bankroll = 0;
	investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
	fundsElement.innerHTML = formatWithCommas(funds, 2);
	portValueElement.innerHTML = formatWithCommas(portTotal);

}

function stockShop() {
	var budget = Math.ceil(portTotal / riskiness);
	var r = 11 - riskiness;
	var reserves = Math.ceil(portTotal / r);
	if (riskiness == 1) {
		reserves = 0;
	}

	if ((bankroll - budget) < reserves && riskiness == 1
			&& bankroll > (portTotal / 10)) {
		budget = bankroll;
	} else if ((bankroll - budget) < reserves && riskiness == 1) {
		budget = 0;
	} else if ((bankroll - budget) < reserves) {
		budget = bankroll - reserves;
	}

	if (portfolioSize < maxPort && bankroll >= 5 && budget >= 1
			&& bankroll - budget >= reserves) {
		if (Math.random() < .25) {

			createStock(budget);

		}

	}
}

function createStock(dollars) {
	stockID++;
	var sym = generateSymbol();
	var roll = Math.random();
	if (roll > .99) {
		var pri = Math.ceil(Math.random() * 3000);
	} else if (roll > .85) {
		var pri = Math.ceil(Math.random() * 500);
	} else if (roll > .60) {
		var pri = Math.ceil(Math.random() * 150);
	} else if (roll > .20) {
		var pri = Math.ceil(Math.random() * 50);
	} else {
		var pri = Math.ceil(Math.random() * 15);
	}

	if (pri > dollars) {
		pri = Math.ceil(dollars * roll);
	}

	var amt = Math.floor(dollars / pri);
	if (amt > 1000000) {
		amt = 1000000;
	}

	var newStock = {
		id : stockID,
		symbol : sym,
		price : pri,
		amount : amt,
		total : pri * amt,
		profit : 0,
		age : 0,
	}

	stocks.push(newStock);
	portfolioSize = stocks.length;
	bankroll = bankroll - (pri * amt);
	investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
	secValueElement.innerHTML = formatWithCommas(secTotal);
	portValueElement.innerHTML = formatWithCommas(portTotal);

}

function sellStock() {

	bankroll = bankroll + stocks[0].total;
	investmentBankrollElement.innerHTML = formatWithCommas(bankroll);
	secValueElement.innerHTML = formatWithCommas(secTotal);
	portValueElement.innerHTML = formatWithCommas(portTotal);
	stocks.splice(0, 1);
	portfolioSize = stocks.length;
}

function generateSymbol() {
	var ltrNum = 0;
	var x = Math.random();
	if (x <= .01) {
		ltrNum = 1;
	} else if (x <= .1) {
		ltrNum = 2;
	} else if (x <= .4) {
		ltrNum = 3;
	} else {
		ltrNum = 4;
	}

	var y = Math.floor(Math.random() * 26);
	var name = alphabet[y];

	for (var i = 1; i < ltrNum; i++) {
		var z = Math.floor(Math.random() * 26);
		name = name.concat(alphabet[z]);
	}

	return name;

}

function updateStocks() {
	for (var i = 0; i < portfolioSize; i++) {

		stocks[i].age = stocks[i].age + 1;
		if (Math.random() < .6) {
			var gain = true;
			if (Math.random() > stockGainThreshold) {
				gain = false;
			}

			var currentPrice = stocks[i].price;
			var delta = Math.ceil((Math.random() * currentPrice)
					/ (4 * riskiness));

			if (gain) {
				stocks[i].price = stocks[i].price + delta;
			} else {
				stocks[i].price = stocks[i].price - delta;
			}

			if (stocks[i].price == 0 && Math.random() > .24) {
				stocks[i].price = 1;
			}

			stocks[i].total = stocks[i].price * stocks[i].amount;

			if (gain) {
				stocks[i].profit = stocks[i].profit
						+ (delta * stocks[i].amount);
			} else {
				stocks[i].profit = stocks[i].profit
						- (delta * stocks[i].amount);
			}
		}
	}
}

// Stock List Display Routine

window.setInterval(function() {

	if (investStratElement.value == "low") {
		riskiness = 7;
	} else if (investStratElement.value == "med") {
		riskiness = 5;
	} else {
		riskiness = 1;
	}

	m = 0;

	for (var i = 0; i < portfolioSize; i++) {
		m = m + stocks[i].total;
	}

	secTotal = m;

	portTotal = bankroll + secTotal;

	secValueElement.innerHTML = formatWithCommas(secTotal);
	portValueElement.innerHTML = formatWithCommas(portTotal);

	portfolioSize = stocks.length;

	for (var i = 1; i <= portfolioSize; i++) { // m@ todo make this into an
												// array ok?
		var n = i.toString();
		var s = i - 1;
		stockSymbolElements[i - 1].innerHTML = stocks[s].symbol;
		stockAmountElements[i - 1].innerHTML = Math.ceil(stocks[s].amount);
		stockPriceElements[i - 1].innerHTML = Math.ceil(stocks[s].price);
		stockTotalElements[i - 1].innerHTML = Math.ceil(stocks[s].total);
		stockProfitElements[i - 1].innerHTML = Math.ceil(stocks[s].profit);
	}

	var firstBlankSlot = portfolioSize + 1;

	// for(var i = firstBlankSlot; i <= 5; i++){ <------ Frank Fix

	for (var i = firstBlankSlot; i < 5; i++) {
		stockSymbolElements[i].innerHTML = "&nbsp";
		stockAmountElements[i].innerHTML = "&nbsp";
		stockPriceElements[i].innerHTML = "&nbsp";
		stockTotalElements[i].innerHTML = "&nbsp";
		stockProfitElements[i].innerHTML = "&nbsp";
	}

}, 100);

window.setInterval(function() {
	if (humanFlag == 1) {
		stockShop();
	}
}, 1000);

window.setInterval(function() {

	sellDelay = sellDelay + 1;

	if (portfolioSize > 0 && sellDelay >= 5 && Math.random() <= .3
			&& humanFlag == 1) {
		sellStock();
		sellDelay = 0;
	}

	if (portfolioSize > 0 && humanFlag == 1) {
		updateStocks();
	}

}, 2500);
