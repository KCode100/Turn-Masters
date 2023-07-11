export type GameProps = {
  handleGameComplete: (score: number) => void
}

export type Game = {
  index?: number
  name: string
  component?: ReactElement
  description: string
}


export type ModalProps = {
  points?: number
  nextRoundData: Game
  handleClick: () => void
  isFirstRound?: boolean
}