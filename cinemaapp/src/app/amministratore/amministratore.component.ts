import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { film } from '../Models/film.model';
import { proiezione } from '../Models/proiezione.model';
//import { sconto } from '../Models/sconto.model';


@Component({
  selector: 'app-amministratore',
  templateUrl: './amministratore.component.html',
  styleUrls: ['./amministratore.component.css']
})


export class AmministratoreComponent implements OnInit {
closeResult = '';
public nuovofilm: film = new film();
public nuovospettacolo: proiezione = new proiezione();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  //AGGIUNGI FILM
    open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    console.log(this.nuovofilm);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;     
    });
  }
  //AGGIUNGI SPETTACOLO
  open1(content1) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  


}
