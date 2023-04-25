import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ItensBreadCrumb } from 'src/app/model/general/ItensBreadCrumb';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';
import { InspectionModel } from 'src/app/model/planetun/inspection.model';
import { InspectionService } from 'src/app/services/planetun/inspection.services';
import { DialogContentInspectionDialog } from './dialog-content-inspection-dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {

  inspections: InspectionModel[] = [];
  filterValue: string = "";
  length: number = 0; 

  displayedColumns: string[] = ['inspectionId', 'companyId', 'brokerCode', 'productCode','productName','inspectionNumber'];
  dataSource: MatTableDataSource<InspectionModel>;

  itensMenu: ItensMenu[] = [
    { name: 'Novo', link: "", icon: "newClaim", type:"new" },
    { name: 'Voltar', link: "/planetun", icon: "back", type:"" }
  ];

  itensBreadCrumb: ItensBreadCrumb[] = [
    { name: 'Home', link: "/", type:"" },
    { name: 'Planetun', link: "/planetun", type:"" },
    { name: 'Inspeção', link: "/inspection" , type:""}
  ];
  
  constructor(
    private wciClaimService: InspectionService,
    public dialog: MatDialog,
    private router: Router) {     
      var token = localStorage.getItem('mpManagerToken');
      if (token === "") {
        this.router.navigate(['/login']);
      }
    }

  ngOnInit(): void {
    this.getAllWciClaims("");
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.getAllWciClaims(this.filterValue);
  }

  getAllWciClaims(defaultFilter: string) {
    this.wciClaimService.getAll(defaultFilter).subscribe(result => {
      this.inspections = result.listData;
      this.length = result.count;
      this.dataSource = new MatTableDataSource(this.inspections);      
    })
  }   
  
  onOpenDialog() {
    const dialogRef = this.dialog.open(DialogContentInspectionDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();  
      console.log(`Dialog result: ${result}`);
    });
  } 

}
