const array = []
let count = 0

const surveyController = (req, res) => {
	count++
	let json = { index: count,  json: req.body } ;
	// console.dir(req.body)
	let surveyarray = array.push(json)
	console.log(array)
	res.json( array );
};

module.exports = {surveyController};