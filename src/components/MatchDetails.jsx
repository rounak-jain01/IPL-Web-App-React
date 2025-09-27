import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function Match() {
  let btn1Ref = useRef();
  let btn2Ref = useRef();
  let tabline = useRef();

  const [data, setData] = useState(null);
  const [playerData, setPdata] = useState(null);
  const [index, setIndex] = useState(0);
  const { id } = useParams();

  let fixeddata = {
    matchid: 89654,
    seriesid: 7607,
    seriesname: "Indian Premier League 2024",
    matchdesc: "1st Match",
    matchformat: "T20",
    startdate: 1711117800000,
    enddate: 1711131906450,
    state: "Complete",
    status: "Royal Challengers Bengaluru opt to bat",
    team1: {
      teamid: 58,
      teamname: "Chennai Super Kings",
      teamsname: "CSK",
      isfullmember: false,
      isassociated: false,
      isleagueteam: false,
      iswomenteam: false,
      isheader: false,
      isactive: false,
      teampriority: "",
      isvideopresent: false,
      imageid: 0,
      countryname: "",
      belongsto: "",
    },
    team2: {
      teamid: 59,
      teamname: "Royal Challengers Bengaluru",
      teamsname: "RCB",
      isfullmember: false,
      isassociated: false,
      isleagueteam: false,
      iswomenteam: false,
      isheader: false,
      isactive: false,
      teampriority: "",
      isvideopresent: false,
      imageid: 0,
      countryname: "",
      belongsto: "",
    },
    umpire1: {
      id: 9680,
      name: "Saiyed Khalid",
      country: "IND",
    },
    umpire2: {
      id: 8909,
      name: "Virender Sharma",
      country: "IND",
    },
    umpire3: {
      id: 8862,
      name: "Nitin Menon",
      country: "IND",
    },
    referee: {
      id: 3894,
      name: "Javagal Srinath",
      country: "IND",
    },
    venueinfo: {
      id: 11,
      ground: "MA Chidambaram Stadium",
      city: "Chennai",
      country: "India",
      timezone: "+05:30",
      established: 0,
      capacity: "50000",
      knownas: "",
      ends: "Anna Pavilion End, V Pattabhiraman Gate End",
      hometeam: "Tamil Nadu, Chennai Super Kings",
      floodlights: false,
      curator: "",
      profile: "",
      imageurl: "",
      groundlength: 0,
      groundwidth: 0,
      othersports: "",
      imageid: "",
      latitude: "",
      longitude: "",
    },
    currbatteamid: 0,
    ismatchnotcovered: false,
    appindex: {
      seotitle:
        "Cricket match facts CSK vs RCB 1st Match,Indian Premier League 2024 | Cricbuzz.com",
      weburl:
        "http://www.cricbuzz.com/cricket-match-facts/89654/csk-vs-rcb-1st-match-indian-premier-league-2024",
    },
    istournament: true,
    tossstatus: "Royal Challengers Bengaluru opt to bat",
    seriesstartdt: 1710979200000,
    seriesenddt: 1716768000000,
    istimeannounced: false,
    statetitle: "",
    replacematchid: 0,
    livestreamenabled: false,
    isfantasyenabled: true,
    broadcastinfo: [],
    daynight: false,
    matchtype: "league",
    seriestype: "IPL",
    shortstatus: "CSK won",
    boundarytrackervalues: {
      boundarytrackervalue: [],
    },
    matchimageid: 386851,
    islivestreamenabled: false,
    isfantasyhandbookenabled: false,
  };

  let playerdata = {
    player: [
      {
        player: [
          {
            id: "7825",
            name: "Faf du Plessis",
            captain: true,
            role: "Batsman",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 170639,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: true,
          },
          {
            id: "1413",
            name: "Virat Kohli",
            captain: false,
            role: "Batsman",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 332891,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "10636",
            name: "Rajat Patidar",
            captain: false,
            role: "Batsman",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 234983,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "7662",
            name: "Glenn Maxwell",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 352454,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: true,
          },
          {
            id: "12225",
            name: "Cameron Green",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 352451,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: true,
          },
          {
            id: "145",
            name: "Dinesh Karthik",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 244969,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "MOUT",
            isoverseas: false,
          },
          {
            id: "13135",
            name: "Anuj Rawat",
            captain: false,
            role: "WK-Batsman",
            keeper: true,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 226472,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "1844",
            name: "Karn Sharma",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 226391,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "11220",
            name: "Alzarri Joseph",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 244661,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: true,
          },
          {
            id: "10953",
            name: "Mayank Dagar",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "10808",
            name: "Mohammed Siraj",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 352491,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
        ],
        category: "playing XI",
      },
      {
        player: [
          {
            id: "14172",
            name: "Yash Dayal",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "MIN",
            isoverseas: false,
          },
          {
            id: "14726",
            name: "Akash Deep",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "12669",
            name: "Suyash Prabhudessai",
            captain: false,
            role: "Batsman",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "10238",
            name: "Swapnil Singh",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "10486",
            name: "Vijaykumar Vyshak",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
        ],
        category: "substitutes",
      },
      {
        player: [
          {
            id: "10954",
            name: "Mahipal Lomror",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 226541,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "8349",
            name: "Reece Topley",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 351852,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "9522",
            name: "Tom Curran",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 170967,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "10692",
            name: "Lockie Ferguson",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 351814,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "12258",
            name: "Will Jacks",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "13962",
            name: "Manoj Bhandage",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "21686",
            name: "Saurav Chauhan",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "32786",
            name: "Rajan Kumar",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "36482",
            name: "Himanshu Sharma",
            captain: false,
            role: "Bowler",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
        ],
        category: "bench",
      },
      {
        player: [
          {
            id: "3406",
            name: "Andy Flower",
            captain: false,
            role: "Head Coach",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 153350,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "3942",
            name: "Sridharan Sriram",
            captain: false,
            role: "Batting Coach",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "42663",
            name: "Adam Griffith",
            captain: false,
            role: "Bowling Coach",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
          {
            id: "8899",
            name: "Malolan Rangarajan",
            captain: false,
            role: "Head of Scouting and Fielding Coach",
            keeper: false,
            teamname: "RCB",
            isheader: false,
            imageId: 0,
            battingStyle: "",
            bowlingStyle: "",
            faceimageid: 182026,
            countryimageid: 0,
            playingxichange: "",
            inmatchchange: "",
            isoverseas: false,
          },
        ],
        category: "support staff",
      },
    ],
  };

  useEffect(() => {
    async function fetchTeamData() {
      const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "31f74ca3ddmsh0fd2c743ae67e88p1d35e1jsna518de8e4549",
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    }

    // if (id) fetchTeamData();
    setData(fixeddata);
  }, [id]);

  useEffect(() => {
    if (!data) return;

    const teamId = index === 0 ? data.team1.teamid : data.team2.teamid;

    async function fetchPlayerData(team) {
      const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/team/${team}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "31f74ca3ddmsh0fd2c743ae67e88p1d35e1jsna518de8e4549",
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setPdata(result);
      } catch (error) {
        console.error(error);
        setPdata(null);
      }
    }

    // fetchPlayerData(teamId);
    setPdata(playerdata);
  }, [data, index, id]);

  useEffect(() => {
    if (index === 0 && btn1Ref.current) {
      togbtn(btn1Ref.current);
    } else if (index === 1 && btn2Ref.current) {
      togbtn(btn2Ref.current);
    }
  }, [index]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Loading Match Details</h1>
          <p className="text-gray-400">Please wait while we fetch the data...</p>
        </div>
      </div>
    );
  }

  const team1Name = data.team1.teamsname;
  const team2Name = data.team2.teamsname;

  // Get team colors based on team name
  const getTeamColors = (teamName) => {
    const colors = {
      'CSK': 'from-yellow-500 to-yellow-600',
      'RCB': 'from-red-500 to-red-600',
      'MI': 'from-blue-500 to-blue-600',
      'KKR': 'from-purple-500 to-purple-600',
      'DC': 'from-blue-400 to-blue-500',
      'PBKS': 'from-red-400 to-red-500',
      'RR': 'from-pink-500 to-pink-600',
      'SRH': 'from-orange-500 to-orange-600',
      'GT': 'from-gray-500 to-gray-600',
      'LSG': 'from-green-500 to-green-600'
    };
    return colors[teamName] || 'from-gray-500 to-gray-600';
  };

  const getTeamTextColors = (teamName) => {
    const colors = {
      'CSK': 'text-yellow-400',
      'RCB': 'text-red-400',
      'MI': 'text-blue-400',
      'KKR': 'text-purple-400',
      'DC': 'text-blue-300',
      'PBKS': 'text-red-300',
      'RR': 'text-pink-400',
      'SRH': 'text-orange-400',
      'GT': 'text-gray-400',
      'LSG': 'text-green-400'
    };
    return colors[teamName] || 'text-gray-400';
  };

  function togbtn(btn) {
    if (!btn || !tabline.current) return;
    let { offsetWidth, offsetLeft } = btn;
    tabline.current.style.width = offsetWidth + "px";
    tabline.current.style.left = offsetLeft + "px";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 animate-gradient">
            Match Details
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${getTeamColors(team1Name)} rounded-full flex items-center justify-center shadow-lg animate-float`}>
              <span className="text-white font-bold text-sm">{team1Name}</span>
            </div>
            <div className="text-gray-400 font-bold text-xl animate-pulse">VS</div>
            <div className={`w-16 h-16 bg-gradient-to-br ${getTeamColors(team2Name)} rounded-full flex items-center justify-center shadow-lg animate-float`} style={{ animationDelay: '0.5s' }}>
              <span className="text-white font-bold text-sm">{team2Name}</span>
            </div>
          </div>
          <p className="text-gray-300 text-lg">{data.matchdesc} • {data.matchformat}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Team Tabs */}
        <div className="relative mb-8">
          <div className="flex justify-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <button
              ref={btn1Ref}
              onClick={(e) => (setIndex(0), togbtn(e.target))}
              className={`team-tab relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                index === 0 
                  ? `${getTeamTextColors(team1Name)} bg-gray-700/50 shadow-lg animate-team-switch` 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {team1Name}
            </button>

            <button
              ref={btn2Ref}
              onClick={(e) => (setIndex(1), togbtn(e.target))}
              className={`team-tab relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                index === 1 
                  ? `${getTeamTextColors(team2Name)} bg-gray-700/50 shadow-lg animate-team-switch` 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {team2Name}
            </button>

            <div
              ref={tabline}
              className="absolute bottom-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300"
            />
          </div>
        </div>

        {/* Players Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-6">
            <h2 className={`text-3xl font-bold ${getTeamTextColors(index === 0 ? team1Name : team2Name)} mb-2`}>
              {index === 0 ? team1Name : team2Name} Squad
            </h2>
            <p className="text-gray-400">Playing XI • Substitutes • Bench • Support Staff</p>
          </div>

          {playerData && Array.isArray(playerData.player) ? (
            <div className="space-y-8">
              {playerData.player.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-4 capitalize flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                      {category.category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {Array.isArray(category.player) && category.player.map((player, playerIndex) => (
                      <div
                        key={playerIndex}
                        className="player-card group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                      >
                        {/* Player Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          {/* Player Info */}
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-12 h-12 bg-gradient-to-br ${getTeamColors(index === 0 ? team1Name : team2Name)} rounded-full flex items-center justify-center shadow-lg`}>
                              <span className="text-white font-bold text-xs">
                                {player.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white text-sm group-hover:text-orange-400 transition-colors duration-300">
                                {player.name}
                              </h4>
                              <p className="text-xs text-gray-400">{player.role}</p>
                            </div>
                          </div>

                          {/* Player Details */}
                          <div className="space-y-2">
                            {player.captain && (
                              <div className="flex items-center space-x-2">
                                <i className="fas fa-crown text-yellow-400 text-xs"></i>
                                <span className="text-xs text-yellow-400 font-medium">Captain</span>
                              </div>
                            )}
                            
                            {player.keeper && (
                              <div className="flex items-center space-x-2">
                                <i className="fas fa-baseball text-blue-400 text-xs"></i>
                                <span className="text-xs text-blue-400 font-medium">Wicket Keeper</span>
                              </div>
                            )}

                            {player.isoverseas && (
                              <div className="flex items-center space-x-2">
                                <i className="fas fa-globe text-green-400 text-xs"></i>
                                <span className="text-xs text-green-400 font-medium">Overseas</span>
                              </div>
                            )}

                            {player.inmatchchange && (
                              <div className="flex items-center space-x-2">
                                <i className="fas fa-exchange-alt text-purple-400 text-xs"></i>
                                <span className="text-xs text-purple-400 font-medium">
                                  {player.inmatchchange === 'MIN' ? 'Impact Player' : player.inmatchchange}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute top-2 right-2 w-1 h-1 bg-orange-500 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading players...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-400 text-sm">
            Match ID: {data.matchid} • Series: {data.seriesname}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Match;
