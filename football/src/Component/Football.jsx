import React, { useState, useEffect } from "react";
import "./Football.css";

const FootballData = () => {
  const [teams, setTeams] = useState([]);
  const [leagueId, setLeagueId] = useState("39");

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`, {
      headers: {
            "x-rapidapi-key": "c3dfefbd5024f4e64c41820bccdd845c",
      },
    })
      .then((response) => response.json())
      .then((data) => setTeams(data.response || []))
      .catch((error) => console.error("Error:", error));
  }, [leagueId]);

  return (
    <div>
      <h1>Football Teams</h1>
      <select onChange={(e) => setLeagueId(e.target.value)} value={leagueId}>
      <option value="39">Premier League</option>
        <option value="61">Ligue 1</option>
        <option value="78">Bundesliga</option>
        <option value="135">Serie A</option>
        <option value="140">La Liga</option>
        <option value="88">Eredivisie</option>
        <option value="94">Primeira Liga</option>
        <option value="253">Indian Super League</option>
        <option value="203">J1 League</option>
        <option value="201">MLS</option>
        <option value="144">Brasileirão</option>
      </select>
      <ul>
        {teams.map((team) => (
          <li key={team.team.id}>{team.team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FootballData;
