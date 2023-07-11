import TimeGuessGame from "@/components/TimeGuessGame";
import TowerGame from "@/components/TowerGame";
import { ReactNode } from "react";

const GAMES: ReactNode[] = [
  <TowerGame key="towerGame" />,
  <TimeGuessGame key="timeGuessGame" />,
]

const SinglePlayer = () => {
  return ( 
    <h1>single player</h1>
  );
}

export default SinglePlayer;