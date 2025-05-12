export interface PadelClassification{
  id: string,
  posicion: number,
  puntos: number,
  jugador: string,
  gap: string,
  posicionJuego: string
}

export interface PadelEvent{
  id: string,
  equipo: string,
  set1: number,
  set2: number,
  set3: number,
  resultado: number,
}
