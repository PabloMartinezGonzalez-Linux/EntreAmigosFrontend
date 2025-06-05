export interface EventResponse {
  event_id?: number,
  name: string,
  sport_type: string,
  event_date: string,
  is_future: boolean
}

export interface LoadEventsResponse {
  result: EventResponse[]
}

export interface PadelClassification{
  user_name: string,
  position: number,
  points: number,
  user_id: number,
  gap: string,
}

export interface LoadClassificationData{
  result: PadelClassification[]
}

export interface PadelEvent{
  team_id: number,
  game_id: number,
  player1: string,
  player2: string,
  set1: number,
  set2: number,
  set3: number,
  resultado: number,
  points: number
}

export interface PadelEventPost{
  player1: string,
  player2: string,
  set1: number,
  set2: number,
  set3: number,
  resultado: number,
}

export interface LoadDataByEventIdResponse {
  result: PadelEvent[]
}

export interface GameIDs{
  team_id: number,
  game_id: number,
}
