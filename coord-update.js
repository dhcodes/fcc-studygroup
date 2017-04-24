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
  apiKey: '', // for Mapquest, OpenCage, Google Premier 
  formatter: null         // 'gpx', 'string', ... 
};
 
let geocoder = NodeGeocoder(options);


let json = data.map((obj) =>  {
        geocoder.geocode(obj.city + ', ' + obj.state + ', ' + obj.country, (err, res) => {
            if (err) {
        console.log(err)
    }
    else {
        
        obj.latitude = res[0].latitude.toString();
        obj.longitude = res[0].longitude.toString();
        
}
    console.log(obj)
})
    return obj;
})

console.log(json)




//fs.writeFile('./assets/json/campsiteclone.json', json)