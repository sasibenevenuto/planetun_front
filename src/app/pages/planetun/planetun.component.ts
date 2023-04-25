import { Component, OnInit } from '@angular/core';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';

@Component({
  selector: 'app-planetun',
  templateUrl: './planetun.component.html',
  styleUrls: ['./planetun.component.scss']
})
export class PlanetunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itensMenu: ItensMenu[] = [
    { name: 'Home', link: "/", icon:"home" , type:""},
    { name: 'Inspeções', link: "/inspection", icon: "", type:"" },
    { name: 'Voltar', link: "/home" , icon: "back", type:""}
  ];
}
