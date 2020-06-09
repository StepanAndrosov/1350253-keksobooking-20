'use strict';

var map = document.querySelector('.map');
map.classList.remove('map--faded'); //открыли фильтр


var apartments = [
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Уютное гнездышко для молодоженов",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3",
      "price": 42000,
      "type": "house",
      "rooms": 3,
      "guests": 6,
      "checkin": "14:00",
      "checkout": "10:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_25_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_27_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_17_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_1_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_12_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_5_b.jpg"
      ]
    },
    "location": {
      "x": 428,
      "y": 493
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 30000,
      "type": "flat",
      "rooms": 1,
      "guests": 1,
      "checkin": "9:00",
      "checkout": "7:00",
      "features": [
        "elevator",
        "conditioner"
      ],
      "description": "Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/01488611-c1f9-4854-ad67-9f0ad3e857e6.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d976dd4b-2a7e-415a-a2a2-afc51caf8006.jpeg"
      ]
    },
    "location": {
      "x": 471,
      "y": 545
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user03.png"
    },
    "offer": {
      "title": "Небольшая лавочка в парке",
      "address": "Chiyoda-ku, Tōkyō-to 102-0091",
      "price": 100,
      "type": "bungalo",
      "rooms": 0,
      "guests": 0,
      "checkin": "0:00",
      "checkout": "0:00",
      "features": [],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": []
    },
    "location": {
      "x": 744,
      "y": 534
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user04.png"
    },
    "offer": {
      "title": "Императорский дворец в центре Токио",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 6000000,
      "type": "house",
      "rooms": 35,
      "guests": 93,
      "checkin": "21:00",
      "checkout": "20:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/5a29d708-9396-40bf-b002-92c5fdeb5c90.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/23e332cb-1379-4582-85ac-901d6c441635.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/1c859bbf-61d6-4295-b463-c1d0cbf62592.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f5e66549-1940-4659-b27a-652f5c809231.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130219545024.jpg",
        "https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130215449816.jpg",
        "https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130206399539.jpg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/69d53ff8-cd47-479d-8c9a-5170352aa169.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/19614107-a1da-4a0b-8a93-95107704a598.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/a97c72b9-e311-4a5a-863d-ea1e31ae9924.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d2a52c68-e877-4902-be6d-c7f3cb198437.jpeg"
      ]
    },
    "location": {
      "x": 526,
      "y": 597
    }
  }
]
var mapPin = document.querySelector('.map__pins') //Метки объявлений

var pinOffer = document.querySelector('#pin')
.content
.querySelector('.map__pin')
.querySelector('img') //<template> Метка объявления

//mapPin.appendChild(pinOffer)

var card = document.querySelector('#card') //Модальное окно с информацией об объявлении
.content
.querySelector('.map__card')
//mapPin.appendChild(card)

var renderPin = function(apartment) {

  var pinElement = pinOffer.cloneNode(true)

  pinElement.src = apartment.author.avatar
  pinElement.alt = apartment.offer.title
  pinElement.style.left = apartment.location.x + 'px'
  pinElement.style.top = apartment.location.y + 'px'

return pinElement
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < apartments.length; i++) {
fragment.appendChild(renderPin(apartments[i]))
}

mapPin.appendChild(fragment)



