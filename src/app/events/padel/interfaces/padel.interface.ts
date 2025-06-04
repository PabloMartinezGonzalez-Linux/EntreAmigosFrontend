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
  id: string,
  posicion: number,
  puntos: number,
  jugador: string,
  gap: string,
  posicionJuego: string
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
}

export interface LoadDataByEventIdResponse {
  result: PadelEvent[]
}

export interface GameIDs{
  team_id: number,
  game_id: number,
}
