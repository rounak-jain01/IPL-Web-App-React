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

    if (id) fetchTeamData();
  }, [id]);

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

    fetchPlayerData(teamId);
  }, [data, index, id]);

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
