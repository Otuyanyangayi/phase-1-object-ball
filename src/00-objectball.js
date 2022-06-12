function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slam Dunks": 1,
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slam Dunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slam Dunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slam Dunks": 5,
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slam Dunks": 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slam Dunks": 2,
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slam Dunks": 10,
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 2,
                    "blocks": 5,
                    "slam Dunks": 5,
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slam Dunks": 0,
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slam Dunks": 12
                }

            }

        }
    }

}
function homeTeamName() {
    let object = gameObject()
    return object['away']['teamName']
  }
  
  const game = gameObject()
  const players = playersObject()
  const team = Object.values(game)

const numPointsScored = (playersName) =>{
    return players[playersName].points

}
const playerObject = () => {
    return {...game.home.players, ...game.away.players }
}
const shoeSize = (playersName) => {

     return players[playerName].shoe
}
const allShoeSizes = () => {
    const stats = Object.values(players)
    return stats.map((stat) => stat.shoe)
}
const teamColors = (teamName) => {
    return findByTeamName(teamName).colors

}

function findByTeamName(teamName) {
    return teamColors.find((team) => team.teamName === teamName)
}
const teamName = () => {
    return team.map((team) => team.teamName)
}
const playerNumbers = (targetTeamName) => {
for (const team of teams) {
    if (team.teamName == targetTeamName) {
        let stats = Object.values(team.players);
        return stats.map((stat) => stat.number);
      }
}
}
const playerStatus = (playerName) => {
return players[playerName]
}
const bigShoeRebounds = () => {
    const sorted = Object.entries(players).sort((a, b) => {
        if (a[1].points > b[1].points) return -1;
        if (a[1].points < b[1].points) return 1;
        if (a[1].points == b[1].points) return 0;
      });
      return sorted[0][0];
    
}
const winningTeam = () => {
    const homeStats = Object.values(game.home.players); 
  const awayStats = Object.values(game.away.players); m
  const homeScore = homeStats.reduce((total, stat) => total + stat.points, 0);
  const awayScore = awayStats.reduce((total, stat) => total + stat.points, 0)
  if (homeScore > awayScore) {
    return game.home.teamName;
  } else if (awayScore > homeScore) {
    return game.away.teamName;
  } else {
    return "Teams are tied!"
}
}
const playerWithLongestName = () => {
    return Object.keys(players).sort((a, b) => {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        if (a.length == b.length) return 0;
      })[0];
}
const doesLongNameStealATon = () =>  {
    const allStats = Object.values(players);
  const maxSteals = Math.max(allStats.map((s) => s.steals));
  const longNameSteals = playerStats(playerWithLongestName()).steals;
  return longNameSteals === maxSteals;
}
