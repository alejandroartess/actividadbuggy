const League = require('../app/data/league').League;

test( 'Test League', () =>{
    let liga = new League(3);
    expect(liga.numberOfTeams).toBe(3);

});