const express = require('express');
let app = express();

//Can switch port if another argument is added
const port = process.argv[2] ? process.argv[2] : 3000;  
//set templating engine
app.set('view engine', 'ejs')

//make routing
app.get("/", (req, res) => {
	res.render("home");
});

app.get("/bye", (req, res) => {
	res.render("bye");
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});