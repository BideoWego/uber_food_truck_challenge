//--------------------------------------------
// ResultList
//--------------------------------------------

var ResultList = function(foodFacilities) {
  this.foodFacilities = foodFacilities;

  this.toString() = function() {
    var str = '<ul class="list-group">';
    for (var i = 0; i < this.foodFacilities.length; i++) {
      str += new ResultListItem(this.foodFacilities[i]).toString();
    }
    str += '</ul>';
    return str;
  };
};

//--------------------------------------------
// ResultListItem
//--------------------------------------------

var ResultListItem = function(foodFacility) {
  this.foodFacility = foodFacility;

  this.toString() = function() {
    var str = '<li class="list-group-item">' +
      '<div class="result-wrap">' +
        '<h3>' + this.foodFacility.applicant + '</h3>' +
        '<p>Location: ' + this.foodFacility.locationDescription + '</p>' +
        '<p>Address: ' + this.foodFacility.address + '</p>' +
        '<p>Hours: ' + this.foodFacility.daysHours + '</p>' +
        '<p>Foods: ' + this.foodFacility.foodItems + '</p>' +
      '</div>';
    str += '</li>';
    return str;
  };
};

//--------------------------------------------
// MapWindow
//--------------------------------------------


var MapWindow = function(foodFacility) {
  this.foodFacility = foodFacility;

  this.toString = function() {
    return '<div id="content">'+
      '<div id="siteNotice"></div>'+
        '<h1 id="firstHeading" class="firstHeading">' + this.foodFacility.applicant +'</h1>'+
        '<div id="bodyContent">'+
          '<p>Location: ' + this.foodFacility.locationDescription + '</p>' +
          '<p>Address: ' + this.foodFacility.address + '</p>' + 
          '<p>Foods: ' + foodFacilit.foodItems + '</p>' + 
          '<p>Type: ' + this.foodFacility.facilityType + '</p>' +
          '<p>Hours: ' + this.foodFacility.daysHours + '</p>' +
      '</div>'+
    '</div>';
  };
};

//--------------------------------------------
// Map
//--------------------------------------------

var map;
function initMap(data, position) {
  console.log(data, position);

  //need a center position here
  var ll = position || {lat: 37.78, lng: -122.4};

  map = new google.maps.Map(document.getElementById('map'), {
    center: ll,
    zoom: 10
  });

  // //collection markers
  // //each with a lat and long
  // //title
  // var marker = new google.maps.Marker({
  //   position: ll,
  //   map: map,
  //   title: 'Hello World!'
  // });

  // //collection windows
  // var infowindow = new google.maps.InfoWindow({
  //   content: new MapWindow().toString()
  // });

  // //collection listeners
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });
}

