import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrosdatails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdatails.html',
  styleUrl: './carrosdatails.scss',
})
export class Carrosdatails {

  @Input("carro") carro: Carro = new Carro(0, "", "", "");
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor() {
    let id = this.router.snapshot.params[('id')]
    if (id > 0) {
      this.findById(id)
    }
  }

  findById(id: number) {
    let carroretornado: Carro = new Carro(id, "LingLong", "Green-Max", "165/70 R13 79T");
    this.carro = carroretornado;
  }

  save() {
    if (this.carro.id > 0) {
      Swal.fire({
        title: 'Sucesso',
        text: 'Editado com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      this.router2.navigate(['admin/carros'], { state: { carroEditado: this.carro } });
    } else {
      Swal.fire({
        title: 'Sucesso',
        text: 'Salvo com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.router2.navigate(['admin/carros'], { state: { carroNovo: this.carro } });
    }
    this.retorno.emit(this.carro);
  }
}
