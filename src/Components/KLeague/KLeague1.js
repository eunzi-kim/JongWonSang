import React, { useState, useEffect } from "react";
import "./KLeague.css";
import TeamInfo from "../../JsonFiles/TeamInfo.json";
import PlayInfo from "../../JsonFiles/PlayHistory22.json";

function KLeague1() {
  let kLeague1 = TeamInfo["1"];
  let [teamKleague1, setTeamKleague1] = useState([]);

  useEffect(() => {
    setTeamKleague1(TeamInfo["1"]);
  }, []);

  const deleteSortPick = () => {
    if (document.querySelector(".sort-pick")) {
      document.querySelector(".sort-pick").classList.remove("sort-pick");
    }
  };

  const onSortName = () => {
    deleteSortPick();
    document.querySelector(".sort-name").classList.add("sort-pick");
    let tempName = kLeague1.concat();
    tempName.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    setTeamKleague1(tempName);
  };

  const onSortChampion = () => {
    deleteSortPick();
    document.querySelector(".sort-champion").classList.add("sort-pick");
    let tempChampion = kLeague1.concat();
    tempChampion.sort(function (a, b) {
      return b.champion.k_league_1 - a.champion.k_league_1;
    });
    setTeamKleague1(tempChampion);
  };

  const onSortScore = () => {
    deleteSortPick();
    document.querySelector(".sort-score").classList.add("sort-pick");
    let tempPlayInfo = PlayInfo["1"].concat();
    let tempScore = [];
    tempPlayInfo.sort(function (a, b) {
      let score_a = a.win * 3 + a.tie * 1;
      let score_b = b.win * 3 + b.tie * 1;
      return score_b - score_a;
    });
    for (let i = 0; i < 12; i++) {
      let idx = tempPlayInfo[i].id;
      for (let j = 0; j < 12; j++) {
        if (teamKleague1[j]["id"] === idx) {
          tempScore.push(teamKleague1[j]);
          break;
        }
      }
    }
    setTeamKleague1(tempScore);
  };

  const onClickTeam = (id) => {
    console.log(id);
    window.location.href = `/team/${id}`;
  };

  return (
    <div>
      <div className="k-leauge-sort">
        <div className="sort-category sort-name" onClick={onSortName}>
          가나다순
        </div>{" "}
        |{" "}
        <div className="sort-category sort-champion" onClick={onSortChampion}>
          리그우승순
        </div>{" "}
        |{" "}
        <div className="sort-category sort-score" onClick={onSortScore}>
          순위순
        </div>
      </div>
      <div className="k-league-body">
        {teamKleague1.map((item, idx) => (
          <div
            className="team"
            onClick={() => onClickTeam(item["id"])}
            key={idx}
          >
            <img
              className="team-logo"
              src={item["logo_img"]}
              alt={item["name"]}
            />
            <p className="team-name">{item["name"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KLeague1;
