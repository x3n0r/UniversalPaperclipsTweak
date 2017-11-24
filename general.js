/**
 * General
 */

// MESSAGES
// ------------------------------------------------------------------------

function displayMessage(msg) {
	readoutElement5.innerHTML = readoutElement4.innerHTML;
	readoutElement4.innerHTML = readoutElement3.innerHTML;
	readoutElement3.innerHTML = readoutElement2.innerHTML;
	readoutElement2.innerHTML = readoutElement1.innerHTML;
	readoutElement1.innerHTML = msg;
}

// BLINK

function blink(element) {

	{
		var handle = setInterval(function() {
			toggleVisibility(element)
		}, 30);
	}

	function toggleVisibility(element) {
		blinkCounter = blinkCounter + 1;

		if (blinkCounter >= 12) {
			clearInterval(handle);
			blinkCounter = 0;
			element.style.visibility = "visible";
		} else {
			if (element.style.visibility != "hidden") {
				element.style.visibility = "hidden";
			} else {
				element.style.visibility = "visible";
			}
		}
	}

}

var oneToTen = [ "zero", "one", "two", "three", "four", "five", "six", "seven",
		"eight", "nine" ], elevenToNineteen = [ 'ten', 'eleven', 'twelve',
		'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
		'nineteen' ], multipleOfTen = [ '', '', 'twenty', 'thirty', 'forty',
		'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ], placeValue = [ "",
		" thousand ", " million ", " billion ", " trillion ", " quadrillion ",
		" quintillion ", " sextillion ", " septillion ", " octillion ",
		" nonillion ", " decillion ", " undecillion ", " duodecillion ",
		" tredecillion ", " quattuordecillion ", " quindecillion ",
		" sexdecillion ", " septendecillion ", " octodecillion ",
		" novemdecillion  ", " vigintillion ", " unvigintillion ",
		" duovigintillion ", " trevigintillion ", " quattuorvigintillion ",
		" quinvigintillion ", " sexvigintillion ", " septenvigintillion ",
		" octovigintillion ", " novemvigintillion ", " trigintillion ",
		" untrigintillion ", " duotrigintillion ", " tretrigintillion ",
		" quattuortrigintillion ", " quintrigintillion ", " sextrigintillion ",
		" septentrigintillion ", " octotrigintillion ", " novemtrigintillion ",
		" quadragintillion ", " unquadragintillion ", " duoquadragintillion ",
		" trequadragintillion ", " quattuorquadragintillion ",
		" quinquadragintillion ", " sexquadragintillion ",
		" septenquadragintillion ", " octoquadragintillion ",
		" novemquadragintillion ", " quinquagintillion ",
		" unquinquagintillion ", " duoquinquagintillion ",
		" trequinquagintillion ", " quattuorquinquagintillion ",
		" quinquinquagintillion ", " sexquinquagintillion ",
		" septenquinquagintillion ", " octoquinquagintillion ",
		" novemquinquagintillion ", " sexagintillion ", " unsexagintillion ",
		" duosexagintillion ", " tresexagintillion ",
		" quattuorsexagintillion ", " quinsexagintillion ",
		" sexsexagintillion ", " septsexagintillion ", " octosexagintillion ",
		" octosexagintillion ", " septuagintillion ", " unseptuagintillion ",
		" duoseptuagintillion ", " treseptuagintillion ",
		" quinseptuagintillion", " sexseptuagintillion",
		" septseptuagintillion", " octoseptuagintillion",
		" novemseptuagintillion", " octogintillion", " unoctogintillion",
		" duooctogintillion", " treoctogintillion", " quattuoroctogintillion",
		" quinoctogintillion", " sexoctogintillion", " septoctogintillion",
		" octooctogintillion", " novemoctogintillion", " nonagintillion",
		" unnonagintillion", " duononagintillion", " trenonagintillion ",
		" quattuornonagintillion ", " quinnonagintillion ",
		" sexnonagintillion ", " septnonagintillion ", " octononagintillion ",
		" novemnonagintillion ", " centillion" ];

function spellf(userInput) {
	var numToWorkOn;

	// if (userInput === availableMatter)
	// {
	// console.log("_______");
	// console.log(userInput);
	// }
	// create map for all unique names in numbering system

	// To check if spell has been called as a function call : spell(123)
	// window.spell(123)

	if (userInput < 0) {
		console.log("Error, value less than 0");
		return userInput.toString();
	}

	if (typeof (userInput) == "number" || typeof (userInput) == "string") {
		numToWorkOn = "" + userInput;
	}

	// To check if spell has been called using a Number/String Object:
	// "123".spell() 123..spell()
	else if (typeof (this) == "object") {
		numToWorkOn = this.toString();
	}

	else {
		throw new Error("Invalid Input");
		return;
	}

	if (numToWorkOn.indexOf("e+") !== -1) {
		var splittedExponentNum = numToWorkOn.split("e+"), exponent = splittedExponentNum[1], str = '';
		if (numToWorkOn.indexOf(".") !== -1) {
			numToWorkOn = splittedExponentNum[0].split(".");
			exponent -= numToWorkOn[1].length;
			numToWorkOn = numToWorkOn.join("");
		} else {
			numToWorkOn = splittedExponentNum[0];
		}
		while (exponent--) {
			str = str + '0';
		}
		numToWorkOn = numToWorkOn + str;
	} else if (numToWorkOn.indexOf(".") !== -1) {
		var splittedDecimal = numToWorkOn.split(".");
		var leftNum = splittedDecimal[0];
		var rightNum = splittedDecimal[1];
		numToWorkOn = leftNum;
	}

	// Put limit check on the program, placevalue map should be increased to
	// increase capacity
	if (numToWorkOn.length >= 303) {
		throw new Error("Number out of bonds!");
		return;
	} else {
		return convertToString(numToWorkOn);
	}

	// Recursie logic to break number into strings of length 3 each and
	// recursively pronounce each
	function convertToString(stringEquivalent) {
		if (stringEquivalent == 0) {
			return '0'
		}

		var result = '', unitLookup = 0, strLength = stringEquivalent.length;
		for (var k = strLength; k > 0; k = k - 3) {

			if (k - 3 <= 0) {
				var subStr = stringEquivalent.substring(k, k - 3);
				pronounce = pronounceNum(subStr);

				if (pronounce.toUpperCase() != 'zero') {
					var num = Number(subStr
							+ "."
							+ stringEquivalent.substring(subStr.length,
									subStr.length + 2));
					result = formatWithCommas(num, 1) + placeValue[unitLookup]
							+ ' , ' + result;
				}
			}
			unitLookup++;
		}
		// to trim of the extra ", " from last
		return result.substring(0, result.length - 3)
	}

	// Determines the range of input and calls respective function
	function pronounceNum(val) {
		val = parseInt(val);
		if (parseInt(val / 10) == 0) {
			return numLessThan10(val);
		} else if (parseInt(val / 100) == 0) {
			return numLessThan99(val)
		} else
			return numLessThan1000(val);
	}

	// Pronounces any number less than 1000
	function numLessThan1000(val) {
		val = Number(val);
		var hundredPlace = parseInt(val / 100), result;
		if (val % 100 == 0) {
			result = oneToTen[hundredPlace] + " hundred ";
		} else {
			result = oneToTen[hundredPlace] + " hundred "
					+ numLessThan99(val % 100);
		}
		return result;
	}

	// Pronounces any number less than 99
	function numLessThan99(val) {
		val = Number(val);
		var tenthPlace = parseInt(val / 10), result;
		if (tenthPlace !== 1) {
			val % 10 ? (result = multipleOfTen[tenthPlace] + " "
					+ numLessThan10(val % 10))
					: (result = multipleOfTen[tenthPlace]);
			return result;
		} else {
			result = elevenToNineteen[val % 10];
			return result;
		}
	}

	// Pronounces any number less than 10
	function numLessThan10(val) {
		val = Number(val);
		return oneToTen[val];
	}
	;

}

function timeCruncher(t) {
	var x = t / 100;
	var h = Math.floor(x / 3600);
	var m = Math.floor(x % 3600 / 60);
	var s = Math.floor(x % 3600 % 60);

	var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

	return hDisplay + mDisplay + sDisplay;
}

function numberCruncher(number, decimals) {
	var suffix = "";
	if (decimals == undefined) {
		decimals = 2;
	}
	var precision = decimals;
	if (number > 999999999999999999999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000000000000000000000;
		suffix = "sexdecillion";
	} else if (number > 999999999999999999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000000000000000000;
		suffix = "quindecillion";
	} else if (number > 999999999999999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000000000000000;
		suffix = "quattuordecillion";
	} else if (number > 999999999999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000000000000;
		suffix = "tredecillion";
	} else if (number > 999999999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000000000;
		suffix = "duodecillion";
	} else if (number > 999999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000000;
		suffix = "undecillion";
	} else if (number > 999999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000000;
		suffix = "decillion";
	} else if (number > 999999999999999999999999999999) {
		number = number / 1000000000000000000000000000000;
		suffix = "nonillion";
	} else if (number > 999999999999999999999999999) {
		number = number / 1000000000000000000000000000;
		suffix = "octillion";
	} else if (number > 999999999999999999999999) {
		number = number / 1000000000000000000000000;
		suffix = "septillion";
	} else if (number > 999999999999999999999) {
		number = number / 1000000000000000000000;
		suffix = "sextillion";
	} else if (number > 999999999999999999) {
		number = number / 1000000000000000000;
		suffix = "quintillion";
	} else if (number > 999999999999999) {
		number = number / 1000000000000000;
		suffix = "quadrillion";
	} else if (number > 999999999999) {
		number = number / 1000000000000;
		suffix = "trillion";
	} else if (number > 999999999) {
		number = number / 1000000000;
		suffix = "billion";
	} else if (number > 999999) {
		number = number / 1000000;
		suffix = "million";
	} else if (number > 999) {
		number = number / 1000;
		suffix = "thousand";
	} else if (number < 1000) {
		precision = 0;
	}
	return number.toFixed(precision) + " " + suffix;
}

function round(roundNum) {
	roundSetup();
	roundLoop();

	function roundSetup() {
		rCounter = 0;
		pickStrats(roundNum);
		var $ = ("Round " + (roundNum + 1));
		tourneyReport($);
	}

	function roundLoop() {
		if (rCounter < 10) {
			runRound();
			setTimeout(function() {
				clearGrid();
			}, 50);
		} else {
			currentRound++;
			runTourney();
		}
	}

	function clearGrid() {

		payoffCellAAElement.style.backgroundColor = "white";
		payoffCellABElement.style.backgroundColor = "white";
		payoffCellBAElement.style.backgroundColor = "white";
		payoffCellBBElement.style.backgroundColor = "white";

		setTimeout(function() {
			roundLoop();
		}, 50);

	}

	function runRound() {

		rCounter++;

		hMovePrev = hMove;
		vMovePrev = vMove;
		hMove = hStrat.pickMove();
		vMove = vStrat.pickMove();

		calcPayoff(hMove, vMove);
	}
}

formatWithCommas = function(num, decimal) {
	var hasDot = false;
	var base = num.toString();
	if (base.indexOf("e+") !== -1) {
		var splittedExponentNum = base.split("e+"), exponent = splittedExponentNum[1], str = '';
		if (base.indexOf(".") !== -1) {
			base = splittedExponentNum[0].split(".");
			exponent -= base[1].length;
			base = base.join("");
		}
		while (exponent--) {
			str = str + '0';
		}
		base = base + str;
	}
	if (base.indexOf(".") !== -1) {
		hasDot = true;
	}
	if (decimal === 0) {
		if (base.length <= 3 && !hasDot)
			return base;
	}
	if (typeof (decimal) === "undefined") {
		decimal = 0;
	}
	var leftNum = hasDot ? base.substr(0, base.indexOf(".")) : base;
	if (decimal === 0) {
		if (num <= 999)
			return leftNum;
		else
			return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
	var dec = hasDot ? base.substr(base.indexOf("."), decimal + 1) : ".";
	while (dec.length < decimal + 1) {
		dec += "0";
	}
	if (num <= 999)
		return leftNum + dec;
	else
		return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + dec;
}

function checkDbg(querystring) {
	cheatbtnsDivElement.style.display = "none";
	if (querystring == '') return;
	//cheatbtnsDivElement
	var valuestring = querystring.slice(1);
	var pairs = valuestring.split("&");
	var pair, name , value;
	for (var i = 0; i < pairs.length; i++) {
		pair = pairs[i].split("=");
		name = pair[0];
		value = pair[1];
		name = unescape(name).replace("+", " ");
		value = unescape(value).replace("+", " ");
		if ( name == "d" && value == "dbg" ) {
			cheatbtnsDivElement.style.display = "block";
			console.warn("block");
		}
	}
}
