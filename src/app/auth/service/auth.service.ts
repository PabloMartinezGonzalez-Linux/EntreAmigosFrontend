import { Injectable, signal } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class AuthService {
  constructor() { }

  // Señal que controla el log del usuario
  isLog = signal(false)

  /**
   * Método que setea a true la señal de logueo
   */
  changeLogin(): void{
    this.isLog.set(true)
  }

  /**
   * Método que setea a false la señal de logueo
   */
  changeLogout(): void{
    this.isLog.set(false)
  }

  /**
   * Petición de log
   * Si devuelve un 200 changeLogin()
   * Si devuelve un 400 nada
   */

  /**
   * Petición de register
   * Si devuelve un 200 changeLogin()
   * Si devuelve un 400 nada
   */

}
