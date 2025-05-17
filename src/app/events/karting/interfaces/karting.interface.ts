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

export interface EventResponseById{
  user_id: number,
  position: number,
  user_name: string,
  quickLap: string,
  averageTime: string
}

export interface LoadDataByEventIdResponse {
  result: EventResponseById[]
}

export interface ClassificationDataResponse{
  user_id: number,
  position: number,
  points: number,
  user_name: string,
  team: string,
  gap: string,
  best_circuit: string
}

export interface LoadClassificationData {
  result: ClassificationDataResponse[]
}

export interface BasicUser{
  id: number,
  name: string
}

export interface LoadUsersNextEventResponse {
  result: BasicUser[]
}

export interface PostNewUserResponse {
  message: string
}
