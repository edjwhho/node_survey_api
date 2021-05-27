const array = []
let count = 0
const surveyarray = array

const surveyControllerPost = (req, res) => {
	count++
	let json = { index: count,  json: req.body } ;
	// console.dir(req.body)
	let surveyarray = array.push(json)
	console.log(array)
	res.json( array );
};

const surveyControllerGet = (req, res) => {
	console.log(surveyarray)
	res.json( surveyarray );
};

module.exports = {surveyControllerPost,surveyControllerGet};