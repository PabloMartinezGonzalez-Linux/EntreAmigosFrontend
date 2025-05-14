import { User } from "../../../auth/interfaces/user.interface"
import { ReactiveFormsModule } from '@angular/forms';

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

export interface ClassificationDataResponse{
  event_id: number,
  position: number,
  points: number,
  name: string,
  team: string,
  gap: string,
  bestCircuit: string
}

export interface LoadClassificationData {
  results: ClassificationDataResponse[]
}

export interface LoadUsersNextEventResponse {
  results: User[]
}

export interface PostNewUserResponse {
  status: string
}
