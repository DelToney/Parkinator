let map;
function initMap() {
      
    map = new google.maps.Map(
        document.getElementById("map"), {zoom:9, center: {lat: 0, lng: 0}}
    );
}

//places a marker at the users location
function getUserPosition() {
    return navigator.geolocation.getCurrentPosition(position =>{
        let mrkr = {lat: position.coords.latitude, lng: position.coords.longitude};
        console.log(mrkr);
        let marker = new google.maps.Marker({position:mrkr, icon:'pin.png', map:map});
        map.panTo(mrkr);
    });
    
}