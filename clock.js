var http = require("http");
var parseString = require('xml2js').parseString;
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:pass@troup.mongohq.com:10017/ashop');


var secList = {
  '363': 'Аксессуары',
  '641': 'Аксессуары для обуви',
  '359': 'Верхняя одежда',
  '258': 'Галантерея',
  '260': 'Головные уборы',
  '355': 'Женская обувь',
  '365': 'Женская одежда',
  '371': 'Купальники, плавки',
  '357': 'Мужская обувь',
  '367': 'Мужская одежда',
  '361': 'Нижнее белье',
  '369': 'Носки, чулки',
  '1007': 'Очки',
  '1011': 'Ремни',
  '1009': 'Сумки',
  '262': 'Футболки',
  '967': 'Халаты и пижамы',
  '1003': 'Чемоданы'
};

var options = {
  host: 'api.gdeslon.ru',
  path: '/api/search.xml?tid=1007&l=5&_gs_at=52354f11e360a0dcc8c16ef3a583afcd78fd241f'
};

function getXml(response) {
  var xml = '';
  response.on('data', function(chunk) {
    xml += chunk;
  });
  response.on('end', function() {
    converXml(xml);
  });
}

function converXml(xml) {
  parseString(xml, function(err, result) {
    console.dir(result.yml_catalog.shop[0].offers);
    console.log(Date.now())
  });
}

http.request(options, getXml).end();

/*
var Cat = mongoose.model('Cat', {
  name: String
});
var kitty = new Cat({
  name: 'Zildjian'
});
kitty.save(function(err) {
  if (err) {
    console.log('meow');
  } else {
    console.log('OK');
  }
});*/
