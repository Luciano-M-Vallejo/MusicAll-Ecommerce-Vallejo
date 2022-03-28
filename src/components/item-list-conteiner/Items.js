/* eslint-disable import/no-anonymous-default-export */
import cello from "../../assets/img/cuerdas/cello.jpg"
import guitarra from "../../assets/img/electronico/guitarra.jpg"
import trompeta from "../../assets/img/viento/trompeta.jpg"
import timbales from "../../assets/img/percusion/timbales.jpg"


const cuerdas = [
  {
    id: 1,
    name: "Cello",
    type: "Cuerdas",
    price: 25000,
    stock: 15,
    // img:
  },
  {
    id: 2,
    name: "Violin",
    type: "Cuerdas",
    price: 5000,
    stock: 20,
    // img:
  },
  {
    id: 3,
    name: "Guitarra",
    type: "Cuerdas",
    price: 4000,
    stock: 40,
    // img:
  },
  {
    id: 4,
    name: "Arpa",
    type: "Cuerdas",
    price: 50000,
    stock: 2,
    // img:
  },
  {
    id: 5,
    name: "Piano",
    type: "Cuerdas",
    price: 100000,
    stock: 2,
    // img:
  },

];

const viento = [
  {
    id: 1,
    name: "Clarinete",
    type: "Viento",
    price: 20000,
    stock: 5,
    // img:
  },
  {
    id: 2,
    name: "Flauta",
    type: "Viento",
    price: 35000,
    stock: 2,
    // img:
  },
  {
    id: 3,
    name: "Saxo",
    type: "Viento",
    price: 15000,
    stock: 6,
    // img:
  },
  {
    id: 4,
    name: "Trompeta",
    type: "Viento",
    price: 10000,
    stock: 8,
    // img:
  }
];

const percucion = [
  {
    id: 1,
    name: "Tambor",
    type: "Percucion",
    price: 10000,
    stock: 15,
    // img:
  },
  {
    id: 2,
    name: "Timbales",
    type: "Percucion",
    price: 80000,
    stock: 1,
    // img:
  },
  {
    id: 3,
    name: "Xilofon",
    type: "Percucion",
    price: 60000,
    stock: 2,
    // img:
  }
];

const electronicos = [
  {
    id: 1,
    name: "Guitarra",
    type: "Electronico",
    price: 45000,
    stock: 40,
    // img:
  },
  {
    id: 1,
    name: "Bajo",
    type: "Electronico",
    price: 40000,
    stock: 35,
    // img:
  },
  {
    id: 1,
    name: "Sintetizador",
    type: "Electronico",
    price: 150000,
    stock: 15,
    // img:
  }
];

const promos = [
  {
    id: 1,
    img: cello,
    name: "Cello",
    type: "Cuerdas",
    price: 100,
    stock: 15
  },
  {
    id: 2,
    img: timbales,
    name: "Timbales",
    type: "Percusion",
    price: 100,
    stock: 1,
  },
  {
    id: 3,
    img: guitarra,
    name: "Guitarra",
    type: "Electrica",
    price: 100,
    stock: 30
  },
  {
    id: 4,
    img: trompeta,
    name: "Trompeta",
    type: "Viento",
    price: 100,
    stock: 5
  }
];


export default { cuerdas, viento, percucion, electronicos, promos };
