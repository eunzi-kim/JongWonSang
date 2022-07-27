import React, { useState, useEffect } from "react";
import "./KLeague.css";
import TeamInfo from "../../JsonFiles/TeamInfo.json";
import PlayInfo from "../../JsonFiles/PlayHistory22.json";

function KLeague2() {
  let kLeague2 = TeamInfo["2"];
  let [teamKleague2, setTeamKleague2] = useState([]);

  useEffect(() => {
    setTeamKleague2(TeamInfo["2"]);
  }, []);

  const deleteSortPick = () => {
    if (document.querySelector(".sort-pick")) {
      document.querySelector(".sort-pick").classList.remove("sort-pick");
    }
  };

  const onSortName = () => {
    deleteSortPick();
    document.querySelector(".sort-name").classList.add("sort-pick");
    let tempName = kLeague2.concat();
    tempName.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    setTeamKleague2(tempName);
  };

  const onSortChampion = () => {
    deleteSortPick();
    document.querySelector(".sort-champion").classList.add("sort-pick");
    let tempChampion = kLeague2.concat();
    tempChampion.sort(function (a, b) {
      return (
        b.champion.k_league_1 +
        b.champion.k_league_2 -
        (a.champion.k_league_1 + a.champion.k_league_2)
      );
    });
    setTeamKleague2(tempChampion);
  };

  const onSortScore = () => {
    deleteSortPick();
    document.querySelector(".sort-score").classList.add("sort-pick");
    let tempPlayInfo = PlayInfo["2"].concat();
    let tempScore = [];
    tempPlayInfo.sort(function (a, b) {
      let score_a = a.win * 3 + a.tie * 1;
      let score_b = b.win * 3 + b.tie * 1;
      return score_b - score_a;
    });
    for (let i = 0; i < 11; i++) {
      let idx = tempPlayInfo[i].id;
      for (let j = 0; j < 11; j++) {
        if (teamKleague2[j]["id"] === idx) {
          tempScore.push(teamKleague2[j]);
          break;
        }
      }
    }
    console.log(tempScore);
    setTeamKleague2(tempScore);
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
        {teamKleague2.map((item, idx) => (
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

export default KLeague2;
