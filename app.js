const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3003
const d = new Date();

app.get('/', function (req, res) {
	//res.sendFile(__dirname + '/public/index.html') // Simple Dot Test
	res.sendFile(__dirname + '/public/index_test0.html') // Simple Dot Test
	//res.sendFile(__dirname + '/public/index_test1.html') // Unknown Location Dot Test
	//res.sendFile(__dirname + '/public/index_test2.html') // Square Tracking Test
});

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));




app.post('/download', function(req, res) {
	try {
		var fs = require('fs');
		var dir  = 'experiment/'.concat((d.getMonth()+1).toString()).concat(d.getDate().toString()).concat('/');

		if (!fs.existsSync('experiment/')){
		    fs.mkdirSync('experiment/');
		}

		if (!fs.existsSync(dir)){
		    fs.mkdirSync(dir);
		}

		fs.writeFileSync(__dirname + '/'.concat(dir) + req.body.name, req.body.coord.join("\n"))
		
	} catch (err) {
		console.log(err)
	}
	console.log(req.body)
});

app.get('/download/:fileName', (req, res) => {
	const file_name = req.params.fileName;
	var path = './public/' + file_name;
	var size = fs.statSync(path).size;
	var f = fs.createReadStream(path);
	res.writeHead(200, {
    		'Content-Type': 'application/force-download',
    		'Content-Disposition': 'attachment; filename=' + file_name,
    		'Content-Length': size
  	});
  	f.pipe(res);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
