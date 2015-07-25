function logicObject () {
	return 0;
}
logicObject.prototype = {
	countLengthTape: function (argument) {
		this.tapeLength = (argument || 0);
		return this.tapeLength;
	}
};

module.exports = logicObject;
