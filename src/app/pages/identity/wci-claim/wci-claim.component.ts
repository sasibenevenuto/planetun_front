import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItensBreadCrumb } from 'src/app/model/general/ItensBreadCrumb';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';
import { WciClaimModel } from 'src/app/model/identity/wciClaim.model';
import { WciClaimService } from 'src/app/services/identity/wci-claim.services';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog-content-example-dialog';

@Component({
  selector: 'app-wci-claim',
  templateUrl: './wci-claim.component.html',
  styleUrls: ['./wci-claim.component.scss']
})
export class WciClaimComponent implements OnInit {

  wciClaims: WciClaimModel[] = [];
  filterValue: string = "";
  length: number = 0;

 

  displayedColumns: string[] = ['wciClaimId', 'nickName', 'nameType', 'value'];
  dataSource: MatTableDataSource<WciClaimModel>;

  itensMenu: ItensMenu[] = [
    { name: 'Novo', link: "", icon: "newClaim", type:"new" },
    { name: 'Voltar', link: "/security", icon: "back", type:"" }
  ];

  itensBreadCrumb: ItensBreadCrumb[] = [
    { name: 'Home', link: "/", type:"" },
    { name: 'Segurança', link: "/security", type:"" },
    { name: 'Permissões', link: "/wciClaim" , type:""}
  ];
  
  constructor(
    private wciClaimService: WciClaimService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllWciClaims("");
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.getAllWciClaims(this.filterValue);
  }

  getAllWciClaims(defaultFilter: string) {
    this.wciClaimService.getAll(defaultFilter).subscribe(result => {
      this.wciClaims = result.listData;
      this.length = result.count;
      this.dataSource = new MatTableDataSource(this.wciClaims);      
    })
  }   
  
  onOpenDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }  
}

