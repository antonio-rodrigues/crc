var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

//CORS handling
allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);


//Get File Collection by Type
app.get('/files/:fileType', function (req, res) {
  var fileType = req.params.fileType.toString().toUpperCase();
  var e = formatDate(new Date());
  console.dir('['+ e +']  ' + fileType + ' files requested.');
  res.json(files[fileType]);
  //res.json(500, { error: 'An error has occurred!' });
});


//Get File Item by Id
app.get('/files/:fileType/:fileId', function (req, res) {
  var fileType = req.params.fileType.toString().toUpperCase();
  var fileId = req.params.fileId;
  var data = {};

  files[fileType].forEach(function (f) {
    //console.log('xmlFileName:', f.xmlFileName);
    if (f.xmlFileName === fileId) {
      data = f;
    }
  });

  res.json(data);
});


app.listen(8080);

console.log('Express listening on port 8080');


//Mockup data

var filesDev = [
  {
    "xmlFileDate": "2015-11-05 14:23:36",
    "xmlFileName": "CRC.0063.20151104129.CDEV.20151104.140601.xml",
    "xmlFilePath": "/files/get/88",
    "xmlFileType": "DEV",
    "xmlFileSequence": "888",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2015-11-05 14:23:36",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151001.146001.xml",
    "xmlFilePath": "/files/get/1111",
    "xmlFileType": "DEV",
    "xmlFileSequence": "1111",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2015-10-01 08:23:36",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151001.555001.xml",
    "xmlFilePath": "/files/get/555",
    "xmlFileType": "DEV",
    "xmlFileSequence": "555",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2015-10-15 12:15:36",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151015.551001.xml",
    "xmlFilePath": "/files/get/552",
    "xmlFileType": "DEV",
    "xmlFileSequence": "552",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2015-10-15 15:56:54",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151015.552001.xml",
    "xmlFilePath": "/files/get/552",
    "xmlFileType": "DEV",
    "xmlFileSequence": "552",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2015-10-23 05:32:44",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/553",
    "xmlFileType": "DEV",
    "xmlFileSequence": "553",
    "xmlFileDownloaded": "true"
  }
];

var filesSld = [
  {
    "xmlFileDate": "2015-11-03 11:23:36",
    "xmlFileName": "CRC.0063.20151104129.CDEV.20151104.770601.xml",
    "xmlFilePath": "/files/get/77",
    "xmlFileType": "SLD",
    "xmlFileSequence": "777",
    "xmlFileDownloaded": "true",
    "display": "true"
  },
  {
    "xmlFileDate": "2015-11-03 11:23:36",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151001.786001.xml",
    "xmlFilePath": "/files/get/22",
    "xmlFileType": "SLD",
    "xmlFileSequence": "222",
    "xmlFileDownloaded": "true",
    "display": "true"
  }
];

var filesResp = [
  {
    "xmlFileDate": "2015-11-11 18:23:36",
    "xmlFileName": "CRC.0063.20151104129.CDEV.20151104.220601.xml",
    "xmlFilePath": "/files/get/66",
    "xmlFileType": "RESP",
    "xmlFileSequence": "656",
    "xmlFileDownloaded": "true",
    "display": "true"
  },
  {
    "xmlFileDate": "2015-11-10 19:23:36",
    "xmlFileName": "CRC.0063.20151104001.CSLD.20151001.666001.xml",
    "xmlFilePath": "/files/get/32",
    "xmlFileType": "RESP",
    "xmlFileSequence": "123",
    "xmlFileDownloaded": "true",
    "display": "true"
  }
];

files = {
  'DEV': filesDev,
  'SLD': filesSld,
  'RESP': filesResp
};

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
