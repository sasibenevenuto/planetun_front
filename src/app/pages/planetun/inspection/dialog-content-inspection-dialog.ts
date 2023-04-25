import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { InspectionModel } from "src/app/model/planetun/inspection.model";
import { InspectionService } from "src/app/services/planetun/inspection.services";

@Component({
  selector: 'dialog-content-inspection-dialog',
  templateUrl: 'dialog-content-inspection-dialog.html',
})
export class DialogContentInspectionDialog {

  model: InspectionModel = new InspectionModel();
  formGroup: FormGroup;
  post: any = {};

  constructor(    
    private formBuilder: FormBuilder,
    private inspectinService: InspectionService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      companyId: [this.model?.companyId, Validators.required],
      brokerCode: [this.model?.brokerCode, [Validators.required, Validators.minLength(5), Validators.maxLength(14)]],
      productCode: [this.model?.productCode],
      productName: [this.model?.productName],
      inspectionNumber: [this.model?.inspectionNumber],
      validate: ''
    });
  }

  onSubmit(post: any) {
    var inspection: any;
    if (post.companyId) {
      inspection = {        
        companyId: post.companyId,
        brokerCode: post.brokerCode,
        productCode: post.productCode,
        productName: post.productName,
        inspectionNumber: post.inspectionNumber
      }
      
      this.inspectinService.add(inspection).subscribe((result) => {
        
      },
        (err) => {

        });
    }
    else {
      alert('Codigo da empresa não pode ser nulo!');
    }
  }

}