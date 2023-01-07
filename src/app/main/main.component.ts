import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  datos = new Array();
  tarea = '';
  descripcion = '';

  Agregar() {
    if (this.tarea != '') {
      this.datos.push({ tarea: this.tarea, descripcion: this.descripcion });
      this.tarea = '';
      this.descripcion = '';
    } else {
      console.log('Debe ingresar todos los campos');
    }
  }

  Eliminar(indice: number) {
    this.datos.splice(indice, 1);
  }
}
