/* eslint-disable import/no-anonymous-default-export */

const cuerdasImag = require.context('../../assets/img/cuerdas', true)
const vientoImag = require.context('../../assets/img/viento', true)
const percusionImag = require.context('../../assets/img/percusion', true)
const electronicoImag = require.context('../../assets/img/electronico', true)



const cuerdas = [
  {
    id: 1,
    name: "Cello",
    type: "Cuerdas",
    detail: "Cello De Estudio Valencia 4/4 C/funda",
    description: "El cello es un instrumento musical grande y con registros graves en sus notas, además de emitir sonidos potentes y nítidos a la vez y del cual puede llegar a hacer de solista. Debido a las dimensiones que caracteriza a este instrumento, la única forma de ubicarlo es colocarlo entre las rodillas.",
    price: 25000,
    stock: 15,
    img: cuerdasImag('./cello.jpg')
  },
  {
    id: 2,
    name: "Violin",
    type: "Cuerdas",
    detail: "Violin Acustico Estudio 4/4 Alta Calidad C/funda",
    description: "De la familia de las cuerdas frotadas, es el más pequeño y agudo entre los de su clase, que se compone de una caja de resonancia en forma de 8, un mástil sin trastes y cuatro cuerdas que se hacen sonar con un arco.",
    price: 5000,
    stock: 20,
    img: cuerdasImag('./violin.jpg')
  },
  {
    id: 3,
    name: "Guitarra",
    type: "Cuerdas",
    detail: "Guitarra criolla clásica C40 natural gloss C/funda",
    description: "La guitarra es un instrumento musical de cuerda pulsada, compuesto de una caja de madera, un mástil sobre el que va adosado el diapasón o trastero —generalmente con un agujero acústico en el centro de la tapa (boca)—, y seis cuerdas. Sobre el diapasón van incrustados los trastes, que permiten las diferentes notas.",
    price: 4000,
    stock: 40,
    img: cuerdasImag('./guitarra.jpg')
  },
  {
    id: 4,
    name: "Arpa",
    type: "Cuerdas",
    detail: "Arpa Profesional 19 Cuerdas Nylon Madera Caoba",
    description: "El arpa​ es un instrumento de cuerda pulsada formado por un marco resonante y una serie variable de cuerdas tensadas entre la sección inferior y la superior. Este instrumento tiene sus orígenes en Egipto y Grecia, cuyas civilizaciones fueron las primeras en teorizar la armonización musical, y les permitió desarrollar las técnicas para construir instrumentos cordófonos. El sonido se obtiene al tocar las cuerdas con los dedos.",
    price: 50000,
    stock: 2,
    img: cuerdasImag('./arpa.jpg')
  },
  {
    id: 5,
    name: "Piano",
    type: "Cuerdas",
    detail: "Piano Acústico Gb1k Pe Polished Ebony",
    description: "El piano es un instrumento de teclado, de la familia de cuerda percutida, al generar su sonido al golpear sus cuerdas con unos martillos controlados por el teclado. Puede producir acordes y dispone de un amplio registro.",
    price: 100000,
    stock: 2,
    img:cuerdasImag('./piano.jpg')
  },

];

const viento = [
  {
    id: 1,
    name: "Clarinete",
    type: "Viento",
    detail: "Clarinete Sib Cl100 17 Llaves Niquel C/Estuche",
    description: "Instrumento musical de viento , que se compone de una boquilla de lengüeta de caña , un tubo formado por varias piezas de madera dura , con agujeros que se tapan con los dedos o se cierran con llave , y un pabellón de clarín . Alcanza cerca de cuatro octavas y se usa mucho en orquestas y bandas militares .",
    price: 20000,
    stock: 5,
    img: vientoImag('./clarinete.jpg')
  },
  {
    id: 2,
    name: "Flauta",
    type: "Viento",
    detail: "Flauta Traversa En Do Llaves Cerradas Sol Desalineado Plata C/Estuche",
    description: "La flauta travesera es un tipo de flauta que se encuentra fabricada en diversos materiales como el metal, hueso, madera, plástico, alpaca o combinaciones de estos. Está compuesta por 3 partes: cabeza, cuerpo y pie. El tubo puede medir de 67 centímetros de largo y 19 milímetros de diámetro. Tiene 13 orificios.",
    price: 35000,
    stock: 2,
    img: vientoImag('./flauta.jpg')
  },
  {
    id: 3,
    name: "Saxo",
    type: "Viento",
    detail: "Saxo Alto Parquer Custom Estudio C/Estuche",
    description: "Instrumento musical de viento , de metal , con boquilla de madera , caña y varias llaves , que es de invención moderna y muy usado , principalmente en las bandas militares y orquestas de jazz ",
    price: 15000,
    stock: 6,
    img: vientoImag('./saxo.jpg')
  },
  {
    id: 4,
    name: "Trompeta",
    type: "Viento",
    detail: "Trompeta Knight Jbtr 300 C/Estuche",
    description: "Instrumento musical de viento , consistente en un tubo largo de metal que va ensanchándose desde la boquilla al pabellón y produce diversidad de sonidos según la fuerza con que la boca impele el aire .",
    price: 10000,
    stock: 8,
    img: vientoImag('./trompeta.jpg')
  }
];

const percusion = [
  {
    id: 1,
    name: "Tambor",
    type: "Percucion",
    detail: "Pearl Tambor Redoblante 14x5 Free Floater Maple Ftmm1450 321",
    description: "Es un tambor, usualmente de poca altura, con hebras llamadas bordones dispuestas diametralmente en la membrana inferior, las cuales le proporcionan su característico timbre más estridente y metálico que el del tambor común.",
    price: 10000,
    stock: 15,
    img: percusionImag('./tambor.jpg')
  },
  {
    id: 2,
    name: "Timbales",
    type: "Percucion",
    detail: "Timbales Sinfónicos Gross",
    description: "Un timbal o tímpano (en plural italiano: timpani) es un instrumento musical membranófono de sonoridad grave, que puede producir golpes secos o resonantes. Se le utiliza golpeando los parches con un palillo o baqueta especial llamada",
    price: 80000,
    stock: 1,
    img: percusionImag('./timbales.jpg')
  },
  {
    id: 3,
    name: "Xilofon",
    type: "Percucion",
    detail: "Xilófono de madera profesional de 32 notas",
    description: "El xilófono es un instrumento de percusión que pertenece al grupo de instrumentos idiófonos. Está formado por un conjunto de barras de madera que, al ser golpeadas con una baqueta, emiten notas afinadas. Es por esto que el xilófono se considera un instrumento de sonido determinado. El xilófono de orquesta suele constar de 42 láminas de madera que llegan a reproducir hasta 3 octavas y media.",
    price: 60000,
    stock: 2,
    img: percusionImag('./xilofon.jpg')
  }
];

const electronicos = [
  {
    id: 1,
    name: "Guitarra",
    type: "Electronico",
    detail: "Guitarra eléctrica SX EE Series EE3 C/funda",
    description: "La guitarra eléctrica es un tipo de guitarra en la que, a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, por lo que el sonido se produce indirectamente por inducción eléctrica y a través de un Amplificador de guitarra o también a través de un Pedal de efectos",
    price: 45000,
    stock: 40,
    img: electronicoImag('./guitarra.jpg')
  },
  {
    id: 1,
    name: "Bajo",
    type: "Electronico",
    detail: "Bajo Eléctrico Ebs100-20 C/funda",
    description: "Instrumento musical de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo.",
    price: 40000,
    stock: 35,
    img: electronicoImag('./bajo.jpg')
  },
  {
    id: 1,
    name: "Sintetizador",
    type: "Electronico",
    detail: "Sintetizador Analógico Mk1",
    description: "Un sintetizador es un instrumento musical de tipo electrónico que, a través de circuitos, genera señales eléctricas que luego son convertidas a sonidos audibles.",
    price: 150000,
    stock: 15,
    img: electronicoImag('./sintetizador.jpg')
  }
];

const promos = [
  {
    id: 1,
    name: "Cello",
    type: "Cuerdas",
    detail: "Cello De Estudio Valencia 4/4 C/funda",
    description: "El cello es un instrumento musical grande y con registros graves en sus notas, además de emitir sonidos potentes y nítidos a la vez y del cual puede llegar a hacer de solista. Debido a las dimensiones que caracteriza a este instrumento, la única forma de ubicarlo es colocarlo entre las rodillas.",
    price: 100,
    stock: 15,
    img: cuerdasImag('./cello.jpg')
  },
  {
    id: 2,
    name: "Timbales",
    type: "Percusion",
    detail: "Timbales Sinfónicos Gross",
    description: "Un timbal o tímpano (en plural italiano: timpani) es un instrumento musical membranófono de sonoridad grave, que puede producir golpes secos o resonantes. Se le utiliza golpeando los parches con un palillo o baqueta especial llamada",
    price: 100,
    stock: 1,
    img: percusionImag('./timbales.jpg')
  },
  {
    id: 3,
    name: "Guitarra",
    type: "Electrica",
    detail: "Guitarra eléctrica SX EE Series EE3 C/funda",
    description: "La guitarra eléctrica es un tipo de guitarra en la que, a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, por lo que el sonido se produce indirectamente por inducción eléctrica y a través de un Amplificador de guitarra o también a través de un Pedal de efectos",
    price: 100,
    stock: 30,
    img: electronicoImag('./guitarra.jpg')
  },
  {
    id: 4,
    name: "Trompeta",
    type: "Viento",
    detail: "Clarinete Sib Cl100 17 Llaves Niquel C/Estuche",
    description: "Instrumento musical de viento , que se compone de una boquilla de lengüeta de caña , un tubo formado por varias piezas de madera dura , con agujeros que se tapan con los dedos o se cierran con llave , y un pabellón de clarín . Alcanza cerca de cuatro octavas y se usa mucho en orquestas y bandas militares .",
    price: 100,
    stock: 5,
    img: vientoImag('./trompeta.jpg')
  }
];


export default { cuerdas, viento, percusion, electronicos, promos };
