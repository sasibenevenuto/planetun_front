import { Component, OnInit } from '@angular/core';
import { StateModel } from 'src/app/model/common/state.model';
import { StateService } from 'src/app/services/common/state.services';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';
import { ItensBreadCrumb } from 'src/app/model/general/ItensBreadCrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  states: StateModel[] = [];
  first = 0;
  rows = 10;

  displayedColumns: string[] = ['stateId', 'name', 'federativeUnit', 'externalCode'];
  dataSource: MatTableDataSource<StateModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  itensMenu: ItensMenu[] = [
    { name: 'Voltar', link: "/common", icon: "back", type:"" }
  ];

  itensBreadCrumb: ItensBreadCrumb[] = [
    { name: 'Home', link: "/", type:"" },
    { name: 'Cadastros', link: "/common", type:"" },
    { name: 'Estados', link: "/states", type:"" }
  ];

  constructor(
    private router: Router,
    private stateService: StateService) {
    var token = localStorage.getItem('mpManagerToken');
    if (token === "") {
      this.router.navigate(['/login']);
    }
   }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.stateService.getAll().subscribe(result => {
      this.states = result.listData;
      this.dataSource = new MatTableDataSource(this.states);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
