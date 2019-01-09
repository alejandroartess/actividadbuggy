const Team = require('../app/data/team').Team;
const Player = require('../app/data/player').Player;

test( 'Test Team Constructor', () =>{
    let equipo = new Team("Valencia");
    expect(equipo.teamName).toBe("Valencia");

    let valor = new Team(0);
    expect(valor.teamValue).toBe(0);

});

test( 'Test Team', () =>{

    console.log(Team);
    console.log(Team._parseTactic);
    let tactica= Team._parseTactic('4-4-2');
    
    expect(tactica.length).toBe(3);
    expect(tactica[0]).toBe(4);
    expect(tactica[1]).toBe(4);
    expect(tactica[2]).toBe(2);

});


test( 'Test Num Posiciones', () =>{
    expect(() => Team._parseTactic('4-4-2-8')).toThrowError('Tactics may only take 3 positions and got ');
 
});

test( 'Test No Letras', () =>{

   expect(() => Team._parseTactic('4-4-e')).toThrowError('One of the specified positions is not a number');

});

test( 'Test No Minimo', () =>{
    
    let player1 = new Player(1);
    let player2 = new Player(2);
    let player3 = new Player(3);
    let player4 = new Player(4);

    let lista_jugadores = [player1, player2, player3, player4];


    let jugadores_seleccionados = Team._getRandomPlayers(lista_jugadores, 3);
    
    expect(jugadores_seleccionados.length).toBe(3);
    expect(lista_jugadores.includes(jugadores_seleccionados[0])).toBe(true);
    expect(lista_jugadores.includes(jugadores_seleccionados[1])).toBe(true);
    expect(lista_jugadores.includes(jugadores_seleccionados[2])).toBe(true);
});

test( 'Num insuficiente', () =>{
        
    let player1 = new Player(1);
    let player2 = new Player(2);
    let player3 = new Player(3);
    let player4 = new Player(4);

    let lista_jugadores = [player1, player2, player3, player4];


    let jugadores_seleccionados = Team._getRandomPlayers(lista_jugadores, 2);
    
    expect(() => Team._getRandomPlayers(lista_jugadores, 20)).toThrowError('Insufficient players to make a team');
 
});

test( '11 exactos', () =>{


    let totalPlayersInTeam = Team.createRandomTeam(4,4,2);
    
    expect(totalPlayersInTeam).toBe(11);
});

test( 'Num equipo', () =>{
    expect(() => Team.createRandomTeam('20')).toThrowError('The team must have exactly 11 players');
 
});
