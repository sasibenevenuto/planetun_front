import { Component, Input, OnInit } from '@angular/core';
import { ItensBreadCrumb } from 'src/app/model/general/ItensBreadCrumb';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() itensBreadCrumb: ItensBreadCrumb[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
