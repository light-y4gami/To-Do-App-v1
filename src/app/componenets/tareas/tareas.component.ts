import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { NotificationService } from 'src/app/notification.service'; 

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  nombreTarea: string = '';
  placeholder: string = 'Escribe tus tareas';
  
  constructor(private servicio: NotificationService) {}

  ngOnInit(): void {
    
  }

  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    }

    // evita que la tarea tenga menos de 4 caracteres
    if (this.nombreTarea.length < 4) {
      this.nombreTarea = '';
      this.placeholder = 'La tarea debe tener al menos 4 caracteres';
    } else {
      this.listaTareas.push(tarea);
      this.nombreTarea = '';
      this.placeholder = 'Escribe tus tareas';
      this.servicio.actualizarContador('pendientes');  
    }
  }

  eliminar(i: number) {
    const tarea = this.listaTareas[i];
    if (tarea.estado) {
      this.servicio.actualizarContador('eliminadas');
    }
    this.listaTareas.splice(i, 1);
    this.actualizarContadorPendientes();
  }

  actualizarTarea(tarea: Tarea, i: number) {
    this.listaTareas[i].estado = !tarea.estado;

    if (tarea.estado) {
      this.servicio.actualizarContador('completadas');
    } else {
      this.servicio.actualizarContador('pendientes');
    }

    this.actualizarContadorPendientes();
  }

  actualizarContadorPendientes() {
    const tareasPendientes = this.listaTareas.filter(tarea => tarea.estado === false);
    this.servicio.contador.pendientes = tareasPendientes.length;
  }
}
