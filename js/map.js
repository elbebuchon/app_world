if (!localStorage.getItem("logged")) {
    window.location.href = "index.html";
}

const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario ",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: " El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador:"Dibú Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    ];

    var map = L.map('map').setView(objetoMapa[0].coordenada, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker(objetoMapa[0].coordenada).addTo(map);



    let select = document.querySelector("select");

    let opciones = objetoMapa.map((objeto) => 
    `<option>${objeto.jugador}</option>`);

    opciones = opciones.join()

    select.innerHTML = opciones;


    function changeMap() {
        const objeto = objetoMapa.find((item) => item.jugador === select.value);
        map.setView(new L.LatLng(...objeto.coordenada), 11);
        marker = L.marker(objeto.coordenada).addTo(map);
        marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
        }

    const cerrarSesion = ()=> {
        localStorage.removeItem("logged")
        window.location.href = "index.html";
    }