function logicObject () {
	var programFinished = false;
	var programInfo = {};
	
	return (programFinished ? programInfo : programFinished);
}

logicObject.prototype = {
	countLengthTape: function (argument) {
		this.tapeLength = (argument || 0);
		return this.tapeLength;
	}
	run: function (programString) {
		var tape = [0],
			tapePosition = 0,
			l = programString.length;

		function findClosing (programStringIndex, programString) {
			var depth = 1;
			var i;
			for (i = programStringIndex; true; i++) { // TODO fix true to error
				switch (programString[i]) {
					case '[': depth++; break;
					case ']': depth--; break;
					default: break;
				}
				if (depth < 1) {return i;}
			};
			return i; // TODO bad program, should throw error
		}

		for (var i = 0; i < l; i++) {
			switch (programString[i]) {
				case '[':
					if (tapePosition === 0) {i = findClosing(i, programString);}
					break;
				default: break;
			}
		};
		
		this.tapeLength = 
	},

};

module.exports = logicObject;
