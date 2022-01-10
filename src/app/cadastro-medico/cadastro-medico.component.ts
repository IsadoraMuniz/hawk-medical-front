import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent implements OnInit {

  especialidades = [
    { id: 1, title: "Ginecologista" },
    { id: 2, title: "Ortopedista" },
    { id: 3, title: "Cardiologista" },
    { id: 4, title: "Geneticista" },
    { id: 5, title: "Alergista" },
    { id: 6, title: "Geriatra" },
    { id: 7, title: "Generalista" },
    { id: 8, title: "Anestesiologista" },
  ];

  especialidadeSelecionada = [];

  constructor() { }

  ngOnInit(): void {
  }



}
