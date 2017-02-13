Function init()
{
    boton.addEventListener('click', onButtonClick);
}

function onButtonClick()
{
    var input = document.getElementById(inputdel numero);
    localStorage.setItem(number, input.value)
}

var lista= document.getElementById(lista-paises);
var links= lista.getElementsByTagName('a');

for (var i=0; i<links.length; i++)
    {
        links[i].addEventListener('click', onLinkClick);
    }
