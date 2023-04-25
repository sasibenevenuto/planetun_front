import { Component, OnInit } from '@angular/core';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itensMenu: ItensMenu[] = [
    { name: 'Home', link: "/", icon:"home" , type:""},
    { name: 'Conta', link: "/accounts", icon: "", type:"" },
    { name: 'Voltar', link: "/home" , icon: "back", type:""}
  ];

}
