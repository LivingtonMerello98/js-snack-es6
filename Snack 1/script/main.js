'use strict'

console.log('snack 1')

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// Stampare a schermo la bici con peso minore utilizzando  template literal

const bikes = [
    { nome: 'Mountain-Bike', peso: 8.5 },
    { nome: 'Bici da Corsa', peso: 7.2 },
    { nome: 'BMX', peso: 10.3 },
    { nome: 'Bici Elettrica', peso: 15.7 },
    { nome: 'Bici Pieghevole', peso: 9.0 },
    { nome: 'Fat-Bike', peso: 13.2 },
    { nome: 'Canyon Ultimate CF Evo 10.0 SL', peso: 11.8 },
    { nome: 'Bici da Trial', peso: 12.5 },
    { nome: 'Pinarello Dogma F12', peso: 14.9 },
    { nome: 'Bianchi Oltre XR4', peso: 12.0 }
  ];

//var per il limite peso


  let lightestBike = bikes[0]; // Inizializziamo con la prima bici dell'array

  bikes.forEach(bike => {
      if (bike.peso < lightestBike.peso) {
          lightestBike = bike; // Se troviamo una bici più leggera, la assegniamo a lightestBike
      }
  });

  console.log(`La bici più leggera è la ${lightestBike.nome} con un peso di ${lightestBike.peso} kg.`);