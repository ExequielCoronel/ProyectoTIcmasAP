const persona = datos[0].results[0];
const nombre = persona.name.first + " " + persona.name.last;
const email = persona.email;
const telefono = persona.phone;
const direccion = persona.location.country + " " + persona.location.state + " " + persona.location.city;
console.log(nombre);
console.log(email);
console.log(telefono);
document.getElementById("nombreTitulo").innerHTML = nombre;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("email").innerHTML = email;
document.getElementById("tel").innerHTML = telefono;
document.getElementById("ubicacion").innerHTML = direccion;
document.getElementById("telefono").innerHTML = telefono;
document.getElementById("mail").innerHTML = email;
document.getElementById("botonColor").addEventListener("click",cambiarColor);
document.getElementById("desactivar").style.display = "none";
document.getElementById("desactivar").addEventListener("click",desactivarColor)

function cambiarColor()
{
    document.getElementById("botonColor").style.display = "none";
    document.getElementById("desactivar").style.display = "block";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h3").style.color = "white";
    document.getElementById("trabajo").style.color = "white";
    document.getElementsByClassName("overlay-mf").item(2).style.backgroundColor = "black";
    document.getElementsByClassName("overlay-mf").item(1).style.backgroundColor = "black";
    document.getElementsByClassName("overlay-mf").item(0).style.backgroundColor = "black";
    document.querySelector("footer").style.backgroundColor = "black";
    document.querySelector("footer").style.color = "white";
    document.getElementById("box-shadow-full").style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("service-box").item(0).style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("service-box").item(1).style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("service-box").item(2).style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("service-box").item(3).style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("service-box").item(4).style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("service-box").item(5).style.backgroundColor = "#E3D9D7";
    document.getElementsByClassName("box-shadow-full").item(1).style.backgroundColor = "#B9A7A1";
}

function desactivarColor()
{
    document.getElementById("desactivar").style.display = "none";
    document.getElementById("botonColor").style.display = "block";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("h3").style.color = "black";
    document.getElementById("trabajo").style.color = "black";
    document.getElementsByClassName("overlay-mf").item(2).style.backgroundColor = "#0078ff";
    document.getElementsByClassName("overlay-mf").item(1).style.backgroundColor = "#0078ff";
    document.getElementsByClassName("overlay-mf").item(0).style.backgroundColor = "#0078ff";
    document.querySelector("footer").style.backgroundColor = "#0062d3";
    document.querySelector("footer").style.color = "#fff";
    document.getElementById("box-shadow-full").style.backgroundColor = "#fff";
    document.getElementsByClassName("service-box").item(0).style.backgroundColor = "#fff";
    document.getElementsByClassName("service-box").item(1).style.backgroundColor = "#fff";
    document.getElementsByClassName("service-box").item(2).style.backgroundColor = "#fff";
    document.getElementsByClassName("service-box").item(3).style.backgroundColor = "#fff";
    document.getElementsByClassName("service-box").item(4).style.backgroundColor = "#fff";
    document.getElementsByClassName("service-box").item(5).style.backgroundColor = "#fff";
    document.getElementsByClassName("box-shadow-full").item(1).style.backgroundColor = "white";
}
