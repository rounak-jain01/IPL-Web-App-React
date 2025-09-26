import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamDetails from "./TeamDetails";
import Home from "./Home";

function Match() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log("Match ID:", id);
  mid = id
  console.log(id);

  async function fetchteamdata() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/team/${65}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4d48dc4b7fmshb450ade29dd5b31p135cb0jsn97bd28fc2fed",
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      // setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  let fixedData = {
    matchid: 89661,
    seriesid: 7607,
    seriesname: "Indian Premier League 2024",
    matchdesc: "2nd Match",
    matchformat: "T20",
    startdate: 1711188000000,
    enddate: 1711201781715,
    state: "Complete",
    status: "Punjab Kings opt to bowl",
    team1: {
      teamid: 65,
      teamname: "Punjab Kings",
      teamsname: "PBKS",
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
      teamid: 61,
      teamname: "Delhi Capitals",
      teamsname: "DC",
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
      id: 8905,
      name: "Jayaraman Madanagopal",
      country: "IND",
    },
    umpire2: {
      id: 8870,
      name: "Nikhil Patwardhan",
      country: "IND",
    },
    umpire3: {
      id: 5475,
      name: "Alex Wharf",
      country: "ENG",
    },
    referee: {
      id: 8968,
      name: "Vengalil Narayanan Kutty",
      country: "IND",
    },
    venueinfo: {
      id: 851,
      ground:
        "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
      city: "Chandigarh",
      country: "India",
      timezone: "+05:30",
      established: 2021,
      capacity: "38000",
      knownas: "",
      ends: "",
      hometeam: "Punjab, Punjab Kings",
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
        "Cricket match facts PBKS vs DC 2nd Match,Indian Premier League 2024 | Cricbuzz.com",
      weburl:
        "http://www.cricbuzz.com/cricket-match-facts/89661/pbks-vs-dc-2nd-match-indian-premier-league-2024",
    },
    istournament: true,
    tossstatus: "Punjab Kings opt to bowl",
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
    shortstatus: "PBKS won",
    boundarytrackervalues: {
      boundarytrackervalue: [],
    },
    matchimageid: 386924,
    islivestreamenabled: false,
    isfantasyhandbookenabled: false,
  };

  useEffect(() => {
    setData(fixedData);
    // setData(fetchteamdata)
  }, []);

  return (
    <div>
      <h1>Match Details</h1>
      {data ? <TeamDetails teams={["PBKS", "KKR"]} /> : <p>Loading...</p>}
    </div>
  );
}

export default Match;
