import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';

@Component({
  selector: 'app-planetun',
  templateUrl: './planetun.component.html',
  styleUrls: ['./planetun.component.scss']
})
export class PlanetunComponent implements OnInit {

  constructor(private router: Router) {
    var token = localStorage.getItem('mpManagerToken');
    if (token === "") {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }
  itensMenu: ItensMenu[] = [
    { name: 'Home', link: "/", icon: "home", type: "" },
    { name: 'Inspeções', link: "/inspection", icon: "", type: "" },
    { name: 'Voltar', link: "/home", icon: "back", type: "" }
  ];
}
