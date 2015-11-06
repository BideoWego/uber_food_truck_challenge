//--------------------------------------------
// FoodFacility
//--------------------------------------------

var FoodFacility = function(attributes) {
  var _setAttributes = function(attributes) {
    for (a in attributes) {
      this[a] = attributes[a];
    }
  };

  _setAttributes.call(this, attributes);
};


// <ul class="list-group">
//   <li class="list-group-item">
//     <div class="result">
//       <h3>
//         Some Food Truck
//       </h3>
//       <p>Location: MAIN ST: MARKET ST to MISSION ST (1 - 99)</p>
//       <p>Address: 50 MAIN ST</p>
//       <p>Hours: Mo-Su:10AM-3PM/5PM-8PM</p>
//       <p>Food: Wraps: Sandwiches: Chicken Wings: Fries: Lemonade: Juices</p>
//     </div>
//   </li>
// </ul>
        
//--------------------------------------------
// ResultList
//--------------------------------------------


//--------------------------------------------
// MapWindow
//--------------------------------------------

var MapWindow = function(foodFacility) {
  this.foodFacility = foodFacility;

  this.toString = function() {
    return '<div id="content">'+
      '<div id="siteNotice"></div>'+
        '<h1 id="firstHeading" class="firstHeading">' + foodFacility.applicant +'</h1>'+
        '<div id="bodyContent">'+
          '<p>Location: ' + foodFacility.locationDescription + '</p>' +
          '<p>Address: ' + foodFacility.address + '</p>' + 
          '<p>Foods: ' + foodFacilit.foodItems + '</p>' + 
          '<p>Type: ' + foodFacility.facilityType + '</p>' +
          '<p>Hours: ' + foodFacility.daysHours + '</p>' +
      '</div>'+
    '</div>';
  };
};

//--------------------------------------------
// Map
//--------------------------------------------

var map;
function initMap(position, data) {
  console.log(position, data);

  //need a center position here
  var ll = position || {lat: 37.78, lng: -122.4};

  map = new google.maps.Map(document.getElementById('map'), {
    center: ll,
    zoom: 10
  });

  //collection markers
  //each with a lat and long
  //title
  var marker = new google.maps.Marker({
    position: ll,
    map: map,
    title: 'Hello World!'
  });

  //collection windows
  var infowindow = new google.maps.InfoWindow({
    content: new MapWindow().toString()
  });

  //collection listeners
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}




