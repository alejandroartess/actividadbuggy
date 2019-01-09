const Player = require('../app/data/player').Player;

test( 'Test Player ', () =>{
    let jugador = new Player(3);
    expect(jugador.id).toBe(3);

});