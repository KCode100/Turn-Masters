import TowerGame from "@/components/TowerGame";
import { ReactNode } from "react";

const GAMES: ReactNode[] = [
  <TowerGame key="towerGame" />,
]

const SinglePlayer = () => {
  return ( 
    <h1>single player</h1>
  );
}

export default SinglePlayer;