const fs = require('fs');
//let data = require('./assets/json/campsites.json');
const NodeGeocoder = require('node-geocoder');
let data = [ 
{ 
    url: 'https://www.facebook.com/groups/free.code.camp.herat',
    city: 'Herat',
    state: '',
    country: 'Afghanistan',
    coordinates: '34.3529° N, 62.2040° E',
    photoUrl: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-0/p200x200/16142712_1380709768660732_3807276804030541539_n.jpg?oh=c25edd0bc923c2018e56c2da69073c9d&oe=59942E99' },
{ 
    url: 'https://www.facebook.com/groups/free.code.camp.kabul',
    city: 'Kabul',
    state: '',
    country: 'Afghanistan',
    coordinates: '34.5553° N, 69.2075° E',
    photoUrl: 'https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/1909236_804880492967338_4532988271657391692_o.jpg?oh=abf0b929866e2640d518e886759d094d&oe=5958C9E2' 
}
]
let options = {
  provider: 'google',
 
  // Optional depending on the providers 
  httpAdapter: 'https', // Default 
  apiKey: 'AIzaSyAkLMmqiXiVLr2bpo3jOHLY4ITbH6ox9zo', // for Mapquest, OpenCage, Google Premier 
  formatter: null         // 'gpx', 'string', ... 
};
 
let geocoder = NodeGeocoder(options);
 
// Using callback 
/*
geocoder.geocode('29 champs elysée paris', function(err, res) {
  console.log(res);
});
*/
let json = [];
function updateData(data, arr) {
    data.map((item,index) =>  {
    geocoder.geocode(item.city + ', ' + item.state + ', ' + item.country, (err, res) => {
    try {
    item.latitude = res[0].latitude.toString();
    item.longitude = res[0].longitude.toString();
    arr.push(item);
    //item.latitude = res[index].latitude.toString()
    //item.longitude = res[index].longitude.toString()
}
catch(err) {
    console.log(err)
}
    })
})

}
updateData(data, json)


//fs.writeFile('./assets/json/campsiteclone.json', json)