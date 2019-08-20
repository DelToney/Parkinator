let map;
function initMap() {
      
    map = new google.maps.Map(
        document.getElementById("map"), {
            zoom:12,
            center: {lat: 0, lng: 0},
            //sets the styles for the map object (Works)
            styles: [
                {
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#1d2c4d'
                    }
                  ]
                },
                {
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#8ec3b9'
                    }
                  ]
                },
                {
                  'elementType': 'labels.text.stroke',
                  'stylers': [
                    {
                      'color': '#1a3646'
                    }
                  ]
                },
                {
                  'featureType': 'administrative.country',
                  'elementType': 'geometry.stroke',
                  'stylers': [
                    {
                      'color': '#4b6878'
                    }
                  ]
                },
                {
                  'featureType': 'administrative.land_parcel',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#64779e'
                    }
                  ]
                },
                {
                  'featureType': 'administrative.province',
                  'elementType': 'geometry.stroke',
                  'stylers': [
                    {
                      'color': '#4b6878'
                    }
                  ]
                },
                {
                  'featureType': 'landscape.man_made',
                  'elementType': 'geometry.stroke',
                  'stylers': [
                    {
                      'color': '#334e87'
                    }
                  ]
                },
                {
                  'featureType': 'landscape.natural',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#023e58'
                    }
                  ]
                },
                {
                  'featureType': 'poi',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#283d6a'
                    }
                  ]
                },
                {
                  'featureType': 'poi',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#6f9ba5'
                    }
                  ]
                },
                {
                  'featureType': 'poi',
                  'elementType': 'labels.text.stroke',
                  'stylers': [
                    {
                      'color': '#1d2c4d'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'geometry.fill',
                  'stylers': [
                    {
                      'color': '#023e58'
                    }
                  ]
                },
                {
                  'featureType': 'poi.park',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#3C7680'
                    }
                  ]
                },
                {
                  'featureType': 'road',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#304a7d'
                    }
                  ]
                },
                {
                  'featureType': 'road',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#98a5be'
                    }
                  ]
                },
                {
                  'featureType': 'road',
                  'elementType': 'labels.text.stroke',
                  'stylers': [
                    {
                      'color': '#1d2c4d'
                    }
                  ]
                },
                {
                  'featureType': 'road.arterial',
                  'stylers': [
                    {
                      'color': '#45ac67'
                    }
                  ]
                },
                {
                  'featureType': 'road.highway',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#64beac'
                    }
                  ]
                },
                {
                  'featureType': 'road.highway',
                  'elementType': 'geometry.stroke',
                  'stylers': [
                    {
                      'color': '#255763'
                    }
                  ]
                },
                {
                  'featureType': 'road.highway',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#b0d5ce'
                    }
                  ]
                },
                {
                  'featureType': 'road.highway',
                  'elementType': 'labels.text.stroke',
                  'stylers': [
                    {
                      'color': '#023e58'
                    }
                  ]
                },
                {
                  'featureType': 'road.local',
                  'stylers': [
                    {
                      'color': '#67748a'
                    }
                  ]
                },
                {
                  'featureType': 'transit',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#98a5be'
                    }
                  ]
                },
                {
                  'featureType': 'transit',
                  'elementType': 'labels.text.stroke',
                  'stylers': [
                    {
                      'color': '#1d2c4d'
                    }
                  ]
                },
                {
                  'featureType': 'transit.line',
                  'elementType': 'geometry.fill',
                  'stylers': [
                    {
                      'color': '#283d6a'
                    }
                  ]
                },
                {
                  'featureType': 'transit.station',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#3a4762'
                    }
                  ]
                },
                {
                  'featureType': 'water',
                  'elementType': 'geometry',
                  'stylers': [
                    {
                      'color': '#0e1626'
                    }
                  ]
                },
                {
                  'featureType': 'water',
                  'elementType': 'labels.text.fill',
                  'stylers': [
                    {
                      'color': '#4e6d70'
                    }
                  ]
                }
              ]
            }

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