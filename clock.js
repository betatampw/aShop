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
  path: '/api/search.xml?tid=1007&l=2&_gs_at=52354f11e360a0dcc8c16ef3a583afcd78fd241f'
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

    for (var i = 0; i < result.yml_catalog.shop[0].offers[0].offer.length; i++) {
      console.log(result.yml_catalog.shop[0].offers[0].offer[i]);
    };
  });
}

http.request(options, getXml).end();


var Products = mongoose.model('Products', {
  available: String,
  merchant_id: String,
  gs_category_id: String,
  id: String,
  gs_product_key: String,
  price: String,
  charge: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
  available: String,
});


var product = new Products({
  name: 'Zildjian'
});
product.save(function(err) {
  if (err) {
    console.log('meow');
  } else {
    console.log('OK');
  }
});


{
  '$': {
    available: 'true',
    merchant_id: '42071',
    gs_category_id: '1007',
    id: '20630268',
    gs_product_key: 'c5679adb6bdd49a4a8611eed160a1a2d7fed44c8'
  },
  price: ['4090.0'],
  charge: ['471.923076923077'],
  merchant_id: ['42071'],
  currencyId: ['RUR'],
  picture: ['http://static.gdeslon.ru/uploads/commodities/00/20/63/02/68/picture/small.jpg?1374096889'],
  name: ['Брюки Vero Moda Very Vero Moda Very VE002EWDX210'],
  description: ['Брюки Vero Moda Very женские. Цвет: синий. Сезон: Весна-лето 2013. С бесплатной доставкой и примеркой на Lamoda.'],
  url: ['http://cc.gdeslon.ru/cc/52354f11e360a0dcc8c16ef3a583afcd78fd241f/20630268/'],
  original_picture: ['http://pn.lmcdn.ru/img600x866/V/E/VE002EWDX210_1.jpg',
    'http://pn.lmcdn.ru/img600x866/V/E/VE002EWDX210_2.jpg',
    'http://pn.lmcdn.ru/img600x866/V/E/VE002EWDX210_3.jpg',
    'http://pn.lmcdn.ru/img600x866/V/E/VE002EWDX210_4.jpg'
  ]
}
