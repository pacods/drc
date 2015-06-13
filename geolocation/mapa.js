window.onload = function(){

    var container = document.querySelector('div.map');

    navigator.geolocation.getCurrentPosition(
        function (geoPosition) {
            addMap(geoPosition.coords.latitude, geoPosition.coords.longitude);
         },

        function (error) {
        alert('failed');
        }
    );

    function addMap(latitude, longitude){

        var options = {

            zoom : 18,
            center : new google.maps.LatLng(latitude, longitude)

        };

        var map = new google.maps.Map(container, options);

        var marker = new google.maps.Marker ({
            position: options.center,
            map: map,
            title: 'Here I am'
        });
    }

};