'use strict'

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const soccerTeams = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Real Madrid', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Manchester United', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Bayern Monaco', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Barcellona', puntiFatti: 0, falliSubiti: 0 }
  ];
  

  //randNum
  let randNum = Math.floor(Math.random() * 100);

soccerTeams.forEach(team => {
    team.puntiFatti = randNum; 
    team.falliSubiti = randNum; 
});

// creo nuovo array con nome e falli subiti
const teamFouls = soccerTeams.map(team => {
    return { nome: team.nome, falliSubiti: team.falliSubiti };
});

// Stampare l'array con nomi e falli subiti
console.log(teamFouls);
