import React from "react";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

export default function Header({ players, title }) {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <StopWatch />
    </header>
  );
}
