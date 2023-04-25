import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountModel } from 'src/app/model/company/account.model';
import { ItensBreadCrumb } from 'src/app/model/general/ItensBreadCrumb';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';
import { AccountService } from 'src/app/services/company/account.services';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts: AccountModel[] = [];

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
  
  displayedColumns: string[] = ['accountId', 'emailAccount', 'companyActived'];
  dataSource: MatTableDataSource<AccountModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  itensMenu: ItensMenu[] = [
    { name: 'Voltar', link: "/company", icon: "", type:"" }
  ];

  itensBreadCrumb: ItensBreadCrumb[] = [
    { name: 'Empresa', link: "/company", type:"" },
    { name: 'Contas', link: "/account", type:"" }
  ];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAllAccounts(0, "", true);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.getAllAccounts(0, this.filterValue, true);
  }

  paginatorClick(pageIndex: any) {
    this.getAllAccounts(pageIndex, this.filterValue);
  }

  atualizaPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllAccounts(pageSkip: number, defaultFilter: string, resetPaginator: boolean = false) {
    this.accountService.getAll(pageSkip, defaultFilter).subscribe(result => {
      this.accounts = result.data;
      this.length = result.count;
      this.dataSource = new MatTableDataSource(this.accounts);
      if (resetPaginator) {
        this.atualizaPaginator();
      }
    })
  }

}
