import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItensMenu } from 'src/app/model/general/itensMenu.model';
import { DialogContentExampleDialog } from 'src/app/pages/identity/wci-claim/dialog-content-example-dialog';
import { WciClaimComponent } from 'src/app/pages/identity/wci-claim/wci-claim.component';

@Component({
  selector: 'app-mat-chip-list',
  templateUrl: './mat-chip-list.component.html',
  styleUrls: ['./mat-chip-list.component.scss']
})
export class MatChipListComponent implements OnInit {

  @Input() itensMenu: ItensMenu[] = [];
  @Output() openDialogChildren: EventEmitter<any> = new EventEmitter<any>();

  drop(event: CdkDragDrop<ItensMenu[]>) {
    moveItemInArray(this.itensMenu, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(WciClaimComponent, { static: false })
  filho: WciClaimComponent;

  handleClick() {
    this.openDialogChildren.emit();
  }

}
