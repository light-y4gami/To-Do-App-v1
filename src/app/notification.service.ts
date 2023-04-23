import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  contador = {
    completadas: 0,
    pendientes: 0,
    eliminadas: 0
  };

  private contadorSubject = new BehaviorSubject(this.contador);

  constructor() {}

  actualizarContador(tipo: string) {
    switch (tipo) {
      case 'completadas':
        this.contador.completadas += 1;
        break;
      case 'pendientes':
        this.contador.pendientes += 1;
        break;
      case 'eliminadas':
        this.contador.eliminadas += 1;
        break;
      default:
        break;
    }
    // Calcula el número de tareas pendientes
    const tareasPendientes = this.contador.pendientes - 1;
    this.contador.pendientes = tareasPendientes;

    this.contadorSubject.next(this.contador);
  }
}
