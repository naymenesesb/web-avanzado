//Este es un comentario de una linea
/*
Esto es un bloque de comentarios
+/

// @Variables

/* En JavaScript se crean las variables
    utilizando la palabra reservada "var", p.ej:
        var nombreVariable;

        -Los nombres de las variables:
        -No den¡ben contener caracteres especiales.
        -No deben comenzar con un número.
        -No deben tener espacios.
        -Se sugiere utilizar formato "camel case lowercase"

        p.ej para el nomnre de la variable "valor númerico 1"
        var ValorNumerico1 (camel case uppercase) X
        var valorNumerico1 (camelcase lowercase) <--

        Los tipos de valores que se pueden guardar en una variable son 
            -Númericos                         -> (NUMBER) 
            -Cadena de textp                   -> (STRING)
            -Booleanos                         -> (BOOLEAN)
            -Arreglos (matrices o vectores)    -> (ARRAY)
            Objetos                            -> (OBJECT)
            -Funciones                         -> (FUNCTION)
*/

/*
    Valores númericos: valores númericos enteros o decimales
*/

var numero1 = 10;
var numero2 = 20.40;

    /* Valores de cadena de texto:El valor siempre va entre comilas (dobles o simples)
*/

var texto1 = 'Hola';
var texto2 = 'Mundo';
var texto3 = '100';

/*
    Valores booleanos: Valores lógicos binarios (Verdadero o Falso);
        true === 1;
        falso === 0;
*/ 

var verdadero = true;

/*
    Arreglos: Es posible almacenar más de un valor
        -Los valores se defienen ente corchetes y separados por una coma.
        -Es posible almacenar valores de distinto tipos.
        -No se sugiere almacenar valores de distintos tipos.
        -Es posible anidar arreglos.
        -A cada valor se le sugiere un número de índice (index),
            éste valor siempre comienza con "cero" (0);
*/

var nayely=['Nayely', 'Meneses', 35, true, ['Lunes', 'Martes']];
var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

//console.log(diasSemana.length);
//console.log(diasSemana[2]);

/*
    Operadores aritméticos: Para realizar operaciones unicamente con 
    valores númericos.
        - (Resta)
        + (Suma): Si alguno de los valores es una cadena de texto (STRING),
        los valores se concatenarán.
        / (Dividir)
        * (Multiplicar)
        % (Resto)
*/

var Division = 13 / 5;
//console.log('El resultado de la división 13/5 es : ', Division);

var Resto = 13 % 5;
//console.log('El resultado del resto 13 entre 5 es: ', Resto)

var numero3 = 20;
var numero4 = 40;
var numero5 = '50';
var resultado = numero3 + numero4;
var resultado2 = numero3 + numero5;
var name = 'Nayely';
var lasName = 'Meneses';
var age = 23;

var nay = 'Mi nombre es '
+ name
+ ' '
+ lasName
+ ' y tengo '
+ age
+ ' años.';

//console.log(nay);

/*
Operadores relacionales:
        >   Mayor que
        <   Menor que
        >=  Igual o mayor que
        <=  Igual o menor que
        ==  Igual que
        !=  Diferente a
        === Exactamente igual que
        !== Exactamente diferente a
*/

var edadSerch = 39 ;
var edadSerchText = '39';
var edadAldo = 36 ;
var edadNayely = 23 ;
var edadShayla = 30 ;

var ejemplo1 = edadSerch > edadShayla;
var ejemplo2 = edadAldo == edadNayely;
var ejemplo3 = edadSerch == edadSerchText;
var ejemplo4 = edadSerch === edadSerchText;
var ejemplo5 = edadNayely !== edadShayla;
var ejemplo6 = edadSerch !== edadSerchText;

// console.log('Resultado ejemplo 1:', ejemplo1);
// console.log('Resultado ejemplo 2:', ejemplo2);
// console.log('edadSerch es igual a edadSerchText', ejemplo3);
// console.log('edadSerch es exáctamente igual a edadSerchText', ejemplo4);
// console.log('edadNayely es exáctamente diferente a edadShayla?: ', ejemplo5);
// console.log('edadSerch es exáctamente diferente a edadSerchText?: ', ejemplo6);


/*
    Operadores lógicos:Opera con valores booleanos
    y siempre devuelven un valor booleano
        || OR
        && AND

        OR: Devolvera "true" si al menos uno de los valores es "true",
            de lo contrario si todos los valores son "false" devolvera "false".

        AND: Devolvera "true" solo si todos los valores son "true",
            de lo contrario devolvera "false"
*/

var booleano1 = true && true && false && true;
var booleano2 = true || false || false|| true|| false;
// console.log(booleano1);
// console.log(booleano2);

var esMayorEdad= edadNayely > 18;
var esAlumnaEdumac = true;
//console.log(esMayorEdad && esAlumnaEdumac);


// valorCampoNombre !== '';

/*
    Incremento y Decremento: Opera unicamente con valores numericos
        ++ Incrementa uno
        --vDecrementa uno
*/
var miEdad=23
miEdad++;
miEdad++;

//consolelog(miEdad);

/*
Estructura de control "if, else"
if(condicional{
    Código que se ejecuta si la condicional es igual a true
}else{
    Código que se ejecuta si la condicional es igual a false
}
*/

var edadUsuarioX=25;


// if (edadUsuarioX <=18){
//     window.console.log('El usuario es menor de edad');
// }else{
//     if(edadUsuarioX <=60){
//         console.log('El usuario es adulto menor de 60 año')
//     }else
//     {
//         console.log('el usuario es adulto mayor');
//     }
// }


// if (edadUsuarioX <=20){
//     window.console.log('El usuario tiene entre 0 y 20 años');
// }else if(edadUsuarioX <=30){
// console.log('El usuario tiene entre 21 y 30 años');
// }else if(edadUsuarioX <=40){
//     console.log('El usuario tiene entre 31 y 40 años');
// }else if(edadUsuarioX <=50){
//     console.log('El usuario tiene entre 41 y 50 años');
// }else{
//     console.log('El usuario es mayor a 50 años');
// }


/*
    Interacción "for"
    Sintaxis:
        for(var i=0; i <10; i++){

        }

        i=index
*/

// var numeroInteracciones=10;
// for(
//     var i =0;
//     i<numeroInteracciones;
//     i++ 
// ){
//     console.log(i);
// }




var meses=[
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',

];

for (var i=0; i < meses.length; i++){
    //console.log(meses[i]);
}



/*
    Objetos: Permiten almacenar mas de un valor.
        -Los valores estan representados por duplas de "Clave/valor" separados por comas.
        -Los objetos contienen "propiedades y metodos"
        -En  donde metodo es una "funcion" (FUNCTION)
*/

// var objeto={
//     clave: 'valor',
//     clave1: 'valor1'
//     clave2:'valor2'
// }

/*Para acceder a las propiedades o metodos de un objeto se puede hacer:
-Notacion de corchetes
    serch['name'],
    serch[lasName];

-Notacion de Puntos
serch.name;
serch.lastName;
*/



var serch={
    name:'Serch',
    lastName:'Pérez Gómez',
    age:36,
    job: 'Web UI Developer',
    address:'Av Juan',
    pets:[
        {
            type:'Gato',
            name: 'Bombi',
            age: 2
        },
    {
            type:'Perro',
            name:'Perseo',
            age:'10'
    }
    ],
    saludar:function(){
        console.log("hola, me llamo")
    }
}

//console.log(serch);

// console.log(serch['name']);
// console.log(serch.name);

// var dataMyWife='Mi esposa se llama'
//     +serch.wife.name
//     +' '
//     +serch.Wife.lastName;

    /*
    Funciones:Conjunto de instrucciones o sentencias que se ejecutan
    cuando se invoca a la funcion.

        Sintaxis:
        funcion() {}
    */

    var sumar= function(){
        var num1=10;
        var num2=20;
        var resultado = num1+num2;
        console.log(resultado);
    }

    //sumar();


    var sumar=function(num1, num2, num3) {
        var _num1 = num1 ? num1 : 0;
        var _num2 = num2 ? num2 : 0;
        var _num3 = num3 ? num3 : 0;

        console.log(_num1 + _num2 + _num3);
        };
    
//sumar(10);//10
//sumar(10,20);//30
//sumar(10,20,30);//60

/*
    Ejemplo 1
*/

var getArea = function(base, altura){
    return (base * altura) / 2;
};

var dataTringles = [
    {
        base: 10,
        altura: 20
    },
    {
        base: 30,
        altura: 50
    },
    {
        base: 70,
        altura: 90
    },
    {
        base: 170,
        altura: 190
    },
    {
        base: 270,
        altura: 490
    }
];

for (var i=0; i < dataTringles.length; i++){
    var _base= dataTringles[i].base;
    var _altura = dataTringles[i].altura;
    console.log(getArea(_base, _altura));
}


//var calificaciones = $('calificacio');