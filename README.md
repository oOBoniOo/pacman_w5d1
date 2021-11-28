<a href="https://www.coreof.tech/" target="_blank">
  <img src="https://api.brandy.run/core/logo" width="100" title="coreof.tech" alt="coreof.tech">
</a>

# Exercises W4D3 - Canvas

Sobre el código del Pacman creado en clase vamos a hacer un par de añadidos: `keyUp` y `keyDown` para que Pacman se desplace por el eje de las Y y pintaremos un laberinto como imagen de fondo del canvas.

## 1. More katas!?

¡It´s Kata-Time!

![kata-Time](https://media2.giphy.com/media/qhy3CzuyVQC2WlCOYd/200.webp?cid=ecf05e47vozz5m63jszco8svorgfrms4uhw0doa24to4yzi7&rid=200.webp&ct=g)

- [Calculating with Functions](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript)
- [Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

## 2. Y axis on Pacman

En esta misma carpeta encontrarás el PACMAN realizado en clase. No obstante aún no es capaz de detectar las teclas `keyUp` y `keyDown`. Al pulsarlas, PACMAN debe dejar de desplazarse por el eje de las X y empezar a desplazarse por el eje de las Y de manera automática. No olvides revisar su `direction` para que la boca vaya siempre hacia el lado correcto del movimiento.

![pacman](https://media4.giphy.com/media/d9QiBcfzg64Io/200w.webp?cid=ecf05e47gog73fhphjofh6n2o114x42xh5opse59cbykfxde&rid=200w.webp&ct=g)

## 3. Pacma`s map

Una vez completado el ejercicio anterior, añade un nuevo actor a tu juego: el mapa. Sigue la información definida en la variable `pacmanMap` de la `class Map {(...)}` y pinta un laberinto en el fondo de tu canvas.

¡Recuerda! El laberinto se comportará como una imagen de fondo: por ahora, tus pacman no interactuarán con ella. Observa el resultado esperado en la siguiente imagen:

<img src="./img/map.gif" alt="map" width="300"/>

## 4. Entrega

Puedes hacer copy&paste del código de tus KATAS en el siguiente espacio y completar el resto de ejercicios en sus respectivos archivos. Después, haznos una pullrequest al repositorio de CORE.
```js
function zero(op) {return aux(0,op)}
function one(op) {return aux(1,op)}
function two(op) {return aux(2,op)}
function three(op) {return aux(3,op)}
function four(op) {return aux(4,op)}
function five(op) {return aux(5,op)}
function six(op) {return aux(6,op)}
function seven(op) {return aux(7,op)}
function eight(op) {return aux(8,op)}
function nine(op) {return aux(9,op)}

function plus(el) {return (x)=>{return x+el}}
function minus(el) {return (x)=>{return x-el}}
function times(el) {return (x)=>{return x*el}}
function dividedBy(el) {return (x)=>{return Math.trunc(x/el)}}

// devolver el numero si no hay operacion
function aux(num, op){
    if (op){return op(num)}
    return num
} 

```

```js
function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length != 10){return false};
    
    let result = walk.reduce((acc,x)=>{
        if(x == 'n'){acc--;return acc}
        if(x == 's'){acc++;return acc}
        if(x == 'w'){acc+=2;return acc}
        if(x == 'e'){acc+=-2;return acc}
    },0)
    return result === 0
  } 
```


## References

- [String.prototype.split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [CanvasRenderingContext2D.strokeRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)
- [CanvasRenderingContext2D.arc()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/arc)
