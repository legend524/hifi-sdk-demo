import React from "react";
import { useState } from "react";
import GameTitle from "./GameTitle";
import ScoreBoard from "./ScoreBoard";
import "./index.css";

export default function MainContainer() {
  const [isStanding, setIsStanding] = useState(0);
  const handleStandingButton = () => {
    setIsStanding(1 - isStanding);
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(#120b16 0 0) padding-box, linear-gradient(to right, #d629f5, #2734fe) border-box",
        border: "4px solid transparent",
        position: "relative",
        borderRadius: "24px",
        padding: "10px",
        marginTop: "238px",
        maxWidth: "720px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <GameTitle />
      <ScoreBoard />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "20px",
          color: "white",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <button
          className="viewStandingButton"
          style={{ borderRadius: "4px", padding: "4px 8px" }}
          onClick={(e) => handleStandingButton(e)}
        >
          {isStanding ? "View Standing" : "Hide Standing"}
        </button>
        <button
          className="participatingButton"
          style={{
            borderRadius: "4px",
            padding: "4px 8px",
          }}
        >
          Participating
        </button>
      </div>
    </div>
  );
}
