// export const playerStats = [
//   {
//     "id": 1,
//     "name": "Virat Kohli",
//     "age": 35,
//     "gender": "Male",
//     "battingStyle": "Right-hand bat",
//     "bowlingStyle": "Right-arm medium",
//     "testMatches": {
//       "matches": 110,
//       "runs": 8676,
//       "centuries": 27,
//       "average": 52.3,
//       "strikeRate": 55.4,
//       "wickets": 4
//     },
//     "odiMatches": {
//       "matches": 275,
//       "runs": 13200,
//       "centuries": 47,
//       "average": 58.2,
//       "strikeRate": 93.6,
//       "wickets": 0
//     },
//     "t20Matches": {
//       "matches": 115,
//       "runs": 4008,
//       "centuries": 1,
//       "average": 52.7,
//       "strikeRate": 135.5,
//       "wickets": 5
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ellyse Perry",
//     "age": 33,
//     "gender": "Female",
//     "battingStyle": "Right-hand bat",
//     "bowlingStyle": "Right-arm fast-medium",
//     "testMatches": {
//       "matches": 10,
//       "runs": 752,
//       "centuries": 1,
//       "average": 47.0,
//       "strikeRate": 51.2,
//       "wickets": 34
//     },
//     "odiMatches": {
//       "matches": 153,
//       "runs": 3003,
//       "centuries": 2,
//       "average": 47.4,
//       "strikeRate": 77.4,
//       "wickets": 157
//     },
//     "t20Matches": {
//       "matches": 126,
//       "runs": 1350,
//       "centuries": 0,
//       "average": 26.5,
//       "strikeRate": 112.4,
//       "wickets": 115
//     }
//   },
//   {
//     "id": 3,
//     "name": "Kane Williamson",
//     "age": 33,
//     "gender": "Male",
//     "battingStyle": "Right-hand bat",
//     "bowlingStyle": "Right-arm off-break",
//     "testMatches": {
//       "matches": 94,
//       "runs": 7370,
//       "centuries": 24,
//       "average": 53.8,
//       "strikeRate": 51.1,
//       "wickets": 30
//     },
//     "odiMatches": {
//       "matches": 161,
//       "runs": 6354,
//       "centuries": 13,
//       "average": 47.8,
//       "strikeRate": 81.2,
//       "wickets": 37
//     },
//     "t20Matches": {
//       "matches": 87,
//       "runs": 2163,
//       "centuries": 0,
//       "average": 33.1,
//       "strikeRate": 122.5,
//       "wickets": 4
//     }
//   },
//   ...
//   // Continue generating players until ID 40
// ]

const cricketPlayers = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "India",
    stats: {
      matches: 254,
      runs: 12169,
      centuries: 43,
      average: 59.1,
      strikeRate: 93.2,
      wickets: 4
    }
  },
  {
    id: 2,
    name: "Steve Smith",
    team: "Australia",
    stats: {
      matches: 128,
      runs: 4378,
      centuries: 11,
      average: 43.3,
      strikeRate: 88.5,
      wickets: 28
    }
  },
  {
    id: 3,
    name: "Kane Williamson",
    team: "New Zealand",
    stats: {
      matches: 151,
      runs: 6173,
      centuries: 13,
      average: 47.5,
      strikeRate: 81.8,
      wickets: 37
    }
  },
  {
    id: 4,
    name: "Joe Root",
    team: "England",
    stats: {
      matches: 152,
      runs: 6109,
      centuries: 16,
      average: 51.3,
      strikeRate: 86.7,
      wickets: 26
    }
  },
  {
    id: 5,
    name: "Babar Azam",
    team: "Pakistan",
    stats: {
      matches: 83,
      runs: 3985,
      centuries: 14,
      average: 56.9,
      strikeRate: 88.7,
      wickets: 0
    }
  },
  {
    id: 6,
    name: "David Warner",
    team: "Australia",
    stats: {
      matches: 128,
      runs: 5455,
      centuries: 18,
      average: 45.5,
      strikeRate: 95.5,
      wickets: 0
    }
  },
  {
    id: 7,
    name: "Rohit Sharma",
    team: "India",
    stats: {
      matches: 227,
      runs: 9205,
      centuries: 29,
      average: 48.9,
      strikeRate: 88.9,
      wickets: 8
    }
  },
  {
    id: 8,
    name: "Quinton de Kock",
    team: "South Africa",
    stats: {
      matches: 123,
      runs: 5355,
      centuries: 15,
      average: 44.7,
      strikeRate: 95.5,
      wickets: 0
    }
  },
  {
    id: 9,
    name: "Jos Buttler",
    team: "England",
    stats: {
      matches: 148,
      runs: 3843,
      centuries: 9,
      average: 40.5,
      strikeRate: 119.8,
      wickets: 0
    }
  },
  {
    id: 10,
    name: "Shakib Al Hasan",
    team: "Bangladesh",
    stats: {
      matches: 206,
      runs: 6464,
      centuries: 9,
      average: 37.9,
      strikeRate: 82.4,
      wickets: 260
    }
  },
  {
    id: 11,
    name: "Ben Stokes",
    team: "England",
    stats: {
      matches: 95,
      runs: 2871,
      centuries: 3,
      average: 40.6,
      strikeRate: 93.9,
      wickets: 74
    }
  },
  {
    id: 12,
    name: "Rashid Khan",
    team: "Afghanistan",
    stats: {
      matches: 74,
      runs: 1045,
      centuries: 0,
      average: 20.9,
      strikeRate: 105.3,
      wickets: 140
    }
  },
  {
    id: 13,
    name: "Trent Boult",
    team: "New Zealand",
    stats: {
      matches: 93,
      runs: 470,
      centuries: 0,
      average: 15.2,
      strikeRate: 78.3,
      wickets: 169
    }
  },
  {
    id: 14,
    name: "Jasprit Bumrah",
    team: "India",
    stats: {
      matches: 67,
      runs: 19,
      centuries: 0,
      average: 1.9,
      strikeRate: 35.8,
      wickets: 108
    }
  },
  {
    id: 15,
    name: "Pat Cummins",
    team: "Australia",
    stats: {
      matches: 69,
      runs: 273,
      centuries: 0,
      average: 12.4,
      strikeRate: 78.1,
      wickets: 111
    }
  },
  {
    id: 16,
    name: "Kagiso Rabada",
    team: "South Africa",
    stats: {
      matches: 77,
      runs: 273,
      centuries: 0,
      average: 12.4,
      strikeRate: 78.1,
      wickets: 122
    }
  },
  {
    id: 17,
    name: "Mitchell Starc",
    team: "Australia",
    stats: {
      matches: 91,
      runs: 474,
      centuries: 0,
      average: 12.8,
      strikeRate: 98.1,
      wickets: 178
    }
  },
  {
    id: 18,
    name: "Shaheen Afridi",
    team: "Pakistan",
    stats: {
      matches: 28,
      runs: 19,
      centuries: 0,
      average: 1.9,
      strikeRate: 35.8,
      wickets: 53
    }
  },
  {
    id: 19,
    name: "Jason Holder",
    team: "West Indies",
    stats: {
      matches: 121,
      runs: 1821,
      centuries: 1,
      average: 25.3,
      strikeRate: 92.1,
      wickets: 139
    }
  },
  {
    id: 20,
    name: "Eoin Morgan",
    team: "England",
    stats: {
      matches: 246,
      runs: 7701,
      centuries: 14,
      average: 39.3,
      strikeRate: 93.1,
      wickets: 0
    }
  },
  {
    id: 21,
    name: "Aaron Finch",
    team: "Australia",
    stats: {
      matches: 132,
      runs: 5232,
      centuries: 17,
      average: 41.9,
      strikeRate: 88.4,
      wickets: 0
    }
  },
  {
    id: 22,
    name: "Shai Hope",
    team: "West Indies",
    stats: {
      matches: 81,
      runs: 3289,
      centuries: 10,
      average: 52.3,
      strikeRate: 74.9,
      wickets: 0
    }
  },
  {
    id: 23,
    name: "Faf du Plessis",
    team: "South Africa",
    stats: {
      matches: 143,
      runs: 5507,
      centuries: 12,
      average: 47.5,
      strikeRate: 88.6,
      wickets: 0
    }
  },
  {
    id: 24,
    name: "Ross Taylor",
    team: "New Zealand",
    stats: {
      matches: 233,
      runs: 8581,
      centuries: 21,
      average: 48.2,
      strikeRate: 83.4,
      wickets: 0
    }
  },
  {
    id: 25,
    name: "Tamim Iqbal",
    team: "Bangladesh",
    stats: {
      matches: 204,
      runs: 7360,
      centuries: 13,
      average: 36.6,
      strikeRate: 78.3,
      wickets: 0
    }
  },
  {
    id: 26,
    name: "Mushfiqur Rahim",
    team: "Bangladesh",
    stats: {
      matches: 218,
      runs: 6600,
      centuries: 7,
      average: 36.9,
      strikeRate: 79.2,
      wickets: 0
    }
  },
  {
    id: 27,
    name: "Angelo Mathews",
    team: "Sri Lanka",
    stats: {
      matches: 218,
      runs: 5835,
      centuries: 3,
      average: 41.0,
      strikeRate: 83.1,
      wickets: 120
    }
  },
  {
    id: 28,
    name: "Kusal Perera",
    team: "Sri Lanka",
    stats: {
      matches: 101,
      runs: 2825,
      centuries: 6,
      average: 30.8,
      strikeRate: 92.0,
      wickets: 0
    }
  },
  {
    id: 29,
    name: "Lasith Malinga",
    team: "Sri Lanka",
    stats: {
      matches: 226,
      runs: 567,
      centuries: 0,
      average: 6.8,
      strikeRate: 78.1,
      wickets: 338
    }
  },
  {
    id: 30,
    name: "Chris Gayle",
    team: "West Indies",
    stats: {
      matches: 301,
      runs: 10480,
      centuries: 25,
      average: 37.8,
      strikeRate: 87.2,
      wickets: 167
    }
  }
];

export default cricketPlayers;
