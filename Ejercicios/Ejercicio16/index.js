let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 8.6444765,
        lng: -80.1643664,
      },
      map,
      title: "Chorro Macho",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 8.1915186,
        lng: -80.535373,
      },
      map,
      title: "Playa El Salado",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 8.0751552,
        lng: -80.8821351,
      },
      map,
      title: "Pista Nápoles",
    })
  );
}