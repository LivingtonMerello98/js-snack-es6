Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando  template literal


•creazione dell'array con oggetti (bici => nome e peso):

const bikes = [

    {
     nome : 'Mountain-Bike',
     peso : '6,8kg'
    }
    ...
]

//dovrei transformare i 6kg in una variabile 

let minWeight =  []//creiamo un array vuoto

  bikes.forEach(bike => {
      if bike.peso < minWeight.peso {
          minWeight = bike; // Se troviamo una bici più leggera, la assegniamo a minWeight
      }
  });
  


  console.log(minWeight.nome & minWeight.peso kg.);






