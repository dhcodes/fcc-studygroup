const fs = require('fs');
let data = require('./assets/json/campsites.json');
const NodeGeocoder = require('node-geocoder');
let options = {
  provider: 'google',
 
  // Optional depending on the providers 
  httpAdapter: 'https', // Default 
  apiKey: 'AIzaSyAkLMmqiXiVLr2bpo3jOHLY4ITbH6ox9zo', // for Mapquest, OpenCage, Google Premier 
  formatter: null         // 'gpx', 'string', ... 
};
 
let geocoder = NodeGeocoder(options);


let json = data.map((obj) =>  {
        return geocoder.geocode(obj.city + ', ' + obj.state + ', ' + obj.country, (err, res) => {
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




fs.writeFile('./assets/json/campsiteclone.json', json)