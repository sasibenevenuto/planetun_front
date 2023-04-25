import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  itensMenu: ItensMenu[] = [
    { name: 'Planetun', link: "/planetun", icon: "planetun", type:"" },
    { name: 'Empresa', link: "/company", icon: "company", type:"" },
    { name: 'Cadastros', link: "/common", icon: "common" , type:""},
    { name: 'Segurança', link: "/security", icon: "security", type:"" }
  ];

  constructor(private router: Router) {
    var token = localStorage.getItem('mpManagerToken');
    if (token === "") {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
