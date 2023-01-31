function initMap(){
    //console.log("mapa")
    const position = {
        lat: -25.363,
        lng: 131.044
    }
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:position
    })
    const marker = new google.maps.Marker({
        position:position,
        map,
        title:"Position Inicial"
    })
    //marker.setPosition({lat,lng})

    geoPosiciona()
}
function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const wathPos = geoLoc.watchPosition(position =>{
            console.log(position,coords)

        },error => console.error(error),{timeout: 5000})
    }
    else{
        alert("Tu navegador no admite geolocalización")
    }
    }