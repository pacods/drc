window.onload  = function(){

    var container = document.querySelector('div.map');

    var latitude = -23.5854288, longitude = -46.677029999999995;

    var options = {

        zoom: 20,
        center: new google.maps.LatLng(latitude, longitude)
    };

    var map = new google.maps.Map(container, options);

};