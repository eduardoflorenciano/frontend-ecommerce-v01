import { ChangeDetectorRef, Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Carro } from '../../../models/carro';

import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Carrosdatails } from '../carrosdatails/carrosdatails';



@Component({
  selector: 'app-carroslist',
  imports: [MdbModalModule, Carrosdatails,],
  templateUrl: './carroslist.html',
  styleUrl: './carroslist.scss',
})
export class Carroslist {

  lista: Carro[] = [];
  carroEdit: Carro = new Carro(0, "", "", "");

  modalService = inject(MdbModalService);
  cdr = inject(ChangeDetectorRef);

  @ViewChild("modalCarro") modalCarro!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;


  constructor() {

    this.lista.push(new Carro(1, 'LingLong', 'Green-Max', '165/70 R13 79T'));
    this.lista.push(new Carro(2, 'Pirelli', 'Cinturato P1', '175/65 R14 82T'));
    this.lista.push(new Carro(3, 'Michelin', 'Primacy 4', '195/55 R16 87V'));

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroNovo) {
      carroNovo.id = 45;
      this.lista.push(carroNovo)
    }

    if (carroEditado) {
      let indice = this.lista.findIndex(x => { return x.id == carroEditado.id })
      this.lista[indice] = carroEditado;
    }

  }

  deletById(carro: Carro) {

    Swal.fire({
      title: 'Tem certeza que deseja deletar?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não"

    }).then((result) => {

      if (result.isConfirmed) {
        let indice = this.lista.findIndex(x => { return x.id == carro.id });
        this.lista.splice(indice, 1);

        this.cdr.detectChanges();
        Swal.fire({
          title: 'Deletado com Sucesso',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });

  }

  new() {
    this.carroEdit = new Carro(0, "", "", "");
    this.modalRef = this.modalService.open(this.modalCarro);
  }

  edit(carro: Carro) {
    this.carroEdit = Object.assign({}, carro);
    this.modalRef = this.modalService.open(this.modalCarro);

  }

  retornoDetalhe(carro: Carro) {
    if (carro.id > 0) {
      let indice = this.lista.findIndex(x => { return x.id == carro.id });
      this.lista[indice] = carro;

    } else {
      carro.id = 55;
      this.lista.push(carro);
    }
    this.modalRef.close();

    this.cdr.detectChanges();
  }

}
