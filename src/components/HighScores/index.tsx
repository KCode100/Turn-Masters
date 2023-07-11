import { Scores } from "@/types";

const HIGHSCORES: Scores[] = [
  {
    name: 'Kivi',
    score: 480
  },
  {
    name: 'Chani',
    score: 420
  },
  {
    name: 'Zehava',
    score: 380
  },
  {
    name: 'Norman',
    score: 280
  },
  {
    name: 'Sabrina',
    score: 230
  },
  {
    name: 'Michael',
    score: 190
  },
  {
    name: 'Shifra',
    score: 170
  },
  {
    name: 'Mummy',
    score: 160
  },
  {
    name: 'Shani',
    score: 120
  }
]

const HighScores = () => {
  return ( 
    <ol className="flex flex-col gap-2">
      {HIGHSCORES.map((highScore, index) => (
        <li key={index} className="flex justify-between">
          <div>
            <span className="text-2xl mr-2">
            { 
              index === 0 ? '🏆' : 
              index === 1 ? '🥇' : 
              index === 2 ? '🥈' : 
              index === 3 ? '🥉' : 
              '💪' 
            }
            </span>
            <span>{highScore.name}</span>
          </div>
          <div>{highScore.score}</div>
        </li>
      ))}
    </ol>
  );
}
 
export default HighScores;