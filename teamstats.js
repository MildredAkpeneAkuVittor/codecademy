const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 17
      },
      {
        firstName: 'Nako',
        lastName: 'Tee',
        age: 15
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 30
      },
      {
        opponent: 'L. Utd',
        teamPoints: 32,
        opponentPoints: 29
      }
    ],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player);
    },
  
    addGame(oppName,teampoints,oppPoints){
      let game = {
        opponent: oppName,
        teamPoints: teampoints,
        opponentPoints: oppPoints
      }
  
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry',28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Kotoko', 43,45);
  team.addGame('Mede3', 40,45);
  team.addGame('HOA', 36,40);
  
  console.log(team.players);
  console.log('');
  console.log(team.games);
  