export interface EventResponse {
  event_id: number,
  name: string
}

export interface LoadEventsResponse {
  results: EventResponse[]
}

export interface DataEventResponse{
  event_id: number,
  position: number,
  name: string,
  quickLap: string,
  averageTime: string
}

export interface LoadDataByEventIdResponse {
  results: DataEventResponse[]
}

/**
 * * === === === *
 */

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
