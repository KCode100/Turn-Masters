import { Scores, newScoreProps } from "@/types";
import { Preferences } from "@capacitor/preferences";
import { useEffect, useState } from "react";

const HighScores = ({newScore}: newScoreProps) => {
  const [highScores, setHighScores] = useState<Scores[] | null>(null)
  const [name, setName] = useState<string>("")

  async function highScoreHandler() {
    // GET SCORES FROM STORAGE
    let scores = await getHighScores()
    setHighScores(scores)

    // HANDLE STATIC HIGHSCORE PAGE 
    if (!newScore) return

    // ADD/REMOVE TO/FROM HIGHSCORE LIST
    if (!scores) scores = []
    const lowestScore = scores.reduce((lowest:any, current:any) => {
      if (current.score < lowest) {
        return current.score;
      } else {
        return lowest;
      }
    }, Infinity);
    if ((newScore <= lowestScore && scores.length > 8)) return // DON'T ADD SCORE IF LIST IS FULL
    if ((newScore > lowestScore && scores.length > 8)) scores.pop() // REMOVE LOWEST SCORE IF LIST IS FULL
    scores.push({
      "id": crypto.randomUUID(),
      "score": newScore
    })
    scores.sort((a:any, b:any) => b.score - a.score)
    setHighScores(scores)
  }

  function handleSaveScore(e:any, id: string) {
    e.preventDefault()
    if (!highScores) return
    const nameInput = name
    const newArray = highScores.map(item => {
      return {...item, name: item.id === id ? nameInput : item.name}
    })
    setHighScores(newArray)
    saveHighScores(newArray)
  }

  async function getHighScores() {
    const res = await Preferences.get({ key: 'highScores' })
    if (!res.value) {
      return null
    }
    const list = JSON.parse(res.value || '')
    return list
  }

  async function saveHighScores(newHighScores:Scores[]) {
    await Preferences.set({
      key: 'highScores',
      value: JSON.stringify(newHighScores)
    });
  }

  useEffect(() => {
    highScoreHandler()
  }, [])
  
  if (!highScores) return (
    <div className="flex items-center justify-between">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
  )
  
  return ( 
    <ol className="flex flex-col gap-2">
      {highScores.map((highScore, index) => (
        <li key={highScore.id} className="flex justify-between">
          <div className="flex">
            <span className="text-2xl mr-2">
              { 
                index === 0 ? '🏆' : 
                index === 1 ? '🥇' : 
                index === 2 ? '🥈' : 
                index === 3 ? '🥉' : 
                '💪' 
              }
            </span>
            {highScore.name ? (
              <span>{highScore.name}</span>
            ) : (
              <form className="inline-flex gap-2" onSubmit={(e) => handleSaveScore(e, highScore.id)}>
                <input type="text" name="userName" value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5 w-1/2" autoFocus maxLength={25} />
                <button type="submit" className="p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200">Save</button>
              </form>
            )}
          </div>
          <div>{highScore.score}</div>
        </li>
      ))}
    </ol>
  );
}

export default HighScores;