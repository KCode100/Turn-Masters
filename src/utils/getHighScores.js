import { Preferences } from "@capacitor/preferences";

async function getHighScores() {
  const res = await Preferences.get({ key: 'highScores' })
  const scoreList = JSON.parse(res.value)
  return scoreList
}
 
export default getHighScores;