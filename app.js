const express = require('express')
const app = express();
const port = 8000;
const survey = require('./routes/survey.route')

app.use(express.json());
app.use('/',survey)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});