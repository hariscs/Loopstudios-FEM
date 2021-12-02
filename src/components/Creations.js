import React from "react";
import CreationItem from "./CreationItem";

import deepEarth from "../images/mobile/image-deep-earth.jpg";
import nightArcade from "../images/mobile/image-night-arcade.jpg";
import soccerTeam from "../images/mobile/image-soccer-team.jpg";
import theGrid from "../images/mobile/image-grid.jpg";
import upAbove from "../images/mobile/image-from-above.jpg";
import pocketBorealis from "../images/mobile/image-pocket-borealis.jpg";
import curious from "../images/mobile/image-curiosity.jpg";
import fisheye from "../images/mobile/image-fisheye.jpg";

import "./Creations.css";

function Creation() {
  return (
    <div className="creations">
      <div className="container">
        <div className="creations__header">
          <h2>Our Creations</h2>
        </div>
        <div className="creation__items">
          <CreationItem image={deepEarth} alt="deep earth" text="Deep Earth" />
          <CreationItem
            image={nightArcade}
            alt="night arcade"
            text="Night Arcade"
          />
          <CreationItem
            image={soccerTeam}
            alt="soccer team"
            text="Soccer Team VR"
          />
          <CreationItem image={theGrid} alt="the grid" text="The Grid" />
          <CreationItem
            image={upAbove}
            alt="from up above vr"
            text="From Up Above VR"
          />
          <CreationItem
            image={pocketBorealis}
            alt="pocket borealis"
            text="Pocket Borealis"
          />
          <CreationItem
            image={curious}
            alt="the curiosity"
            text="The Curiosity"
          />
          <CreationItem image={fisheye} alt="fish eye" text="Make It FishEye" />
        </div>
        <button className="creations__header--button">See All</button>
      </div>
    </div>
  );
}

export default Creation;
