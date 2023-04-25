import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CityModel } from 'src/app/model/common/city.model';
import { ItensBreadCrumb } from 'src/app/model/general/ItensBreadCrumb';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';
import { CityService } from 'src/app/services/common/city.services';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: CityModel[] = [];

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10];
  filterValue: string = "";

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  displayedColumns: string[] = ['cityId', 'name', 'externalCode', 'state.federativeUnit'];
  dataSource: MatTableDataSource<CityModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  itensMenu: ItensMenu[] = [
    { name: 'Voltar', link: "/common", icon: "back", type:"" }
  ];

  itensBreadCrumb: ItensBreadCrumb[] = [
    { name: 'Home', link: "/" , type:""},
    { name: 'Cadastros', link: "/common", type:"" },
    { name: 'Cidades', link: "/cities", type:"" }
  ];

  constructor(private cityService: CityService) { }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.getAllCities(0, this.filterValue, true);
  }

  paginatorClick(pageIndex: any) {
    this.getAllCities(pageIndex, this.filterValue);
  }

  ngOnInit() {
    this.getAllCities(0, "", true);
  }

  atualizaPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllCities(pageSkip: number, defaultFilter: string, resetPaginator: boolean = false) {
    this.cityService.getAll(pageSkip, defaultFilter).subscribe(result => {
      this.cities = result.listData;
      this.length = result.count;
      this.dataSource = new MatTableDataSource(this.cities);
      if (resetPaginator) {
        this.atualizaPaginator();
      }
    })
  }

}
