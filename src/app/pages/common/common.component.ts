import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itensMenu: ItensMenu[] = [
    { name: 'Home', link: "/", icon:"home", type:"" },
    { name: 'Estados', link: "/states", icon:"state", type:"" },
    { name: 'Cidade', link: "/cities", icon:"city", type:"" },
    { name: 'Voltar', link: "/home", icon:"back", type:"" }
  ];
}
