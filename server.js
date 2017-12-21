var Express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = Express();
app.use(bodyParser.json());
app.use(Express.static('js/clmtrackr-js'));
app.use(Express.static('Images'));

let fileCount = 0;
let fileNumber = 0;

setInterval(updateNumber, 10000);
function updateNumber() {
  if (fileCount > 0) {

  fileNumber++;

  if(fileNumber === fileCount) {
    fileNumber = 0;
  }
}
}

let emotionArray = [];

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, fileCount + ".jpg");
    }
});

var upload = multer({ storage: Storage }).single("imgUploader");

app.post("/api/Upload", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        fileCount++;
        emotionArray.push([]);
        return res.end("File uploaded sucessfully!");
    });
});

app.post('/api/emotions', function (req, res) {

let kms = JSON.stringify(req.body);
for (let i = 0; i<6; i++) {
let newKms = kms.substring(kms.indexOf(".")-1, kms.indexOf(".")+4);
kms = kms.substring(kms.indexOf(".")+3);

if (fileCount > 0) {
emotionArray[fileNumber][i] = newKms;
}

}

console.log(emotionArray);

  res.send(JSON.stringify({
    fileCount: fileCount.toString()
  }));
});

/*
app.post('/api/getData', function (req, res) {

  console.log(req.body);

  res.send(JSON.stringify({
    body: JSON.stringify(emotionArray)
  }));
});
*/
app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
});
app.get("/upload", function (req, res) {
    res.sendFile(__dirname + "/upload.html");
});

app.listen(2000, function (a) {
    console.log("Listening to port 2000");
});
