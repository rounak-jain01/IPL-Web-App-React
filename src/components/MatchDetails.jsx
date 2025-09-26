import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Match() {
  const [data, setData] = useState(null);
  const [playerData, setPdata] = useState(null);
  const [index, setIndex] = useState(0); // 0 -> team1, 1 -> team2
  const { id } = useParams();

  // Fetch match/team data when id changes
  useEffect(() => {
    async function fetchTeamData() {
      const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": '31f74ca3ddmsh0fd2c743ae67e88p1d35e1jsna518de8e4549',
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



  // Fetch players whenever `data` is available or when `index` changes
  useEffect(() => {
    if (!data) return;

    const teamId = index === 0 ? data.team1.teamid : data.team2.teamid;

    async function fetchPlayerData(team) {
      const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/team/${team}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": '31f74ca3ddmsh0fd2c743ae67e88p1d35e1jsna518de8e4549',
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


  if (!data) {
    return (
      <div>
        <h1>Match Details</h1>
        <h2>Loading match...</h2>
      </div>
    );
  }

  const team1Name = data.team1.teamsname;
  const team2Name = data.team2.teamsname;

  return (
    <div>
      <h1>Match Details</h1>

      {/* <TeamDetails teams={[team1Name, team2Name]} /> */}

      {/* Two buttons: one for each team */}
      <div style={{ margin: "12px 0" }}>
        <button
          onClick={() => setIndex(0)}
          style={{
            marginRight: 8,
            padding: "8px 12px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: index === 0 ? "700" : "400",
            boxShadow: index === 0 ? "0 0 0 2px rgba(0,0,0,0.1)" : "none",
          }}
        >
          {team1Name}
        </button>

        <button
          onClick={() => setIndex(1)}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: index === 1 ? "700" : "400",
            boxShadow: index === 1 ? "0 0 0 2px rgba(0,0,0,0.1)" : "none",
          }}
        >
          {team2Name}
        </button>
      </div>

      <div>
        <h2>
          Player Details — {index === 0 ? team1Name : team2Name}
        </h2>

        {playerData && Array.isArray(playerData.player) ? (
          playerData.player.map((d, i) => (
            <div key={i}>
              {Array.isArray(d.player)
                ? d.player.map((p, idx) => (
                  <div key={idx}>
                    <p>{p.name}</p>
                    <p>{p.role}</p>
                  </div>
                ))
                : null}
            </div>
          ))
        ) : (
          <p>Loading players...</p>
        )}
      </div>
    </div>
  );
}

export default Match;
