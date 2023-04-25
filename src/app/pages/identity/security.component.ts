import { Component, OnInit } from '@angular/core';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itensMenu: ItensMenu[] = [
    { name: 'Home', link: "/", icon:"home", type:"" },
    { name: 'Permissões', link: "/wciClaim", icon: "security", type:"" },
    { name: 'Perfil', link: "/profile", icon: "profile", type:"" },
    { name: 'Voltar', link: "/home" , icon: "back", type:""}
  ];

}
