const socket = io();

if (navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const {latitude, longitude} = position.coords;
        socket.emit("send-location",{latitude:latitude,longitude:longitude})
    },
    (error)=>{
        console.log(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
);

}

LargestContentfulPaint.map("map")
