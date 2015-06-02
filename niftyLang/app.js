var fs = require("fs")
var parser = require("./out.js").parser

fs.readFile("./sampleCode.js", function(err, data){
	var str = addBlockBrackets(data.toString())
	console.log(str)
	var twenty = parser.parse("3 *\n\n4 * 5")
	console.log(twenty)
})





var addBlockBrackets = function(str){
	var curIndent = 0
	var lines = str.split("\n").map(function(str){
		var count = str.match(/^\t*/g)[0].length
		if(count > curIndent){
			while(count > curIndent){
				curIndent++
				str = "{"+str
			}
		}else{
			while(count < curIndent){
				curIndent--
				str = "}"+str
			}
		}
		return str
	})
	var result = lines.reduce(function(prev, cur){
		return prev + cur + "\n"
	},"")
	while(curIndent > 0){
		curIndent--
		result = result+"}"
	}
	return result
}