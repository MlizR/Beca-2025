function areaRectangulo(base, altura) {
    return base * altura;
}

function adapterRectangulo(areaRectangulo){
    return function(base, altura) {
        return areaRectangulo(base, altura);
    };
}

const getAreaRectangulo = adapterRectangulo(areaRectangulo);
const resultado = getAreaRectangulo(9,4);

document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;