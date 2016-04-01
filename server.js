var express = require('express'),
  app = express();

// [If using] Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

// Express 4
app.use(express.static(__dirname + '/'));

// CORS handling
allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,RANGE');
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
  console.dir('[' + e + ']  ' + fileType + ' files requested.');
  res.json(files[fileType]);
  //res.json(500, { error: 'An error has occurred!' });
});


//Get File Item by Id
app.get('/files/:fileType/:fileId', function (req, res) {
  var fileType = req.params.fileType.toString().toUpperCase();
  var fileId = req.params.fileId;
  var items = {};
  files[fileType].forEach(function (f) {
    if (f.xmlFileName === fileId) {
      items = f;
    }
  });
  res.json(items);
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
  },
  {
    "xmlFileDate": "2016-01-01 05:32:44",
    "xmlFileName": "CRC.0063.20160101001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/011",
    "xmlFileType": "DEV",
    "xmlFileSequence": "011",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2016-04-01 05:32:44",
    "xmlFileName": "CRC.0063.20160401001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/641",
    "xmlFileType": "DEV",
    "xmlFileSequence": "641",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2016-01-11 05:32:44",
    "xmlFileName": "CRC.0063.20160111001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/111",
    "xmlFileType": "DEV",
    "xmlFileSequence": "111",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2016-02-03 05:32:44",
    "xmlFileName": "CRC.0063.20160203001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/023",
    "xmlFileType": "DEV",
    "xmlFileSequence": "023",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2016-02-02 05:32:44",
    "xmlFileName": "CRC.0063.20160202001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/202",
    "xmlFileType": "DEV",
    "xmlFileSequence": "202",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2016-01-26 05:32:44",
    "xmlFileName": "CRC.0063.20160126001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/126",
    "xmlFileType": "DEV",
    "xmlFileSequence": "126",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2016-04-01 05:32:44",
    "xmlFileName": "CRC.0063.20160401001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/401",
    "xmlFileType": "DEV",
    "xmlFileSequence": "401",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2016-03-01 05:32:44",
    "xmlFileName": "CRC.0063.20160301001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/301",
    "xmlFileType": "DEV",
    "xmlFileSequence": "301",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2016-01-15 05:32:44",
    "xmlFileName": "CRC.0063.20160115001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/015",
    "xmlFileType": "DEV",
    "xmlFileSequence": "015",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2016-04-23 05:32:44",
    "xmlFileName": "CRC.0063.20160404001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/604",
    "xmlFileType": "DEV",
    "xmlFileSequence": "604",
    "xmlFileDownloaded": "false"
  },
  {
    "xmlFileDate": "2016-03-23 05:32:44",
    "xmlFileName": "CRC.0063.20160304001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/603",
    "xmlFileType": "DEV",
    "xmlFileSequence": "603",
    "xmlFileDownloaded": "true"
  },
  {
    "xmlFileDate": "2016-02-23 05:32:44",
    "xmlFileName": "CRC.0063.20160204001.CSLD.20151023.553001.xml",
    "xmlFilePath": "/files/get/602",
    "xmlFileType": "DEV",
    "xmlFileSequence": "602",
    "xmlFileDownloaded": "false"
  },
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
  },
  {
  "xmlFileDate": "2016-01-03 11:23:36",
  "xmlFileName": "CRC.0063.20160103001.CSLD.20151001.786001.xml",
  "xmlFilePath": "/files/get/224",
  "xmlFileType": "SLD",
  "xmlFileSequence": "224",
  "xmlFileDownloaded": "false",
  "display": "true"
  },
  {
    "xmlFileDate": "2016-02-15 11:23:36",
    "xmlFileName": "CRC.0063.20160215001.CSLD.20151001.786001.xml",
    "xmlFilePath": "/files/get/215",
    "xmlFileType": "SLD",
    "xmlFileSequence": "215",
    "xmlFileDownloaded": "false",
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
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
