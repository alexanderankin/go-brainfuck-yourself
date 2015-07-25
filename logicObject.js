function logicObject () {
	return 0;
}
logicObject.prototype = {
	countLengthTape: function (argument) {
		this.tapeLength = (argument || 0);
		return this.tapeLength;
	}
};

var b = new logicObject();
b.countLengthTape(4);
console.log(b.tapeLength);