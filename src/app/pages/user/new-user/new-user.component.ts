import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/model/general/myErrorStateMatcher.model';
import { NewUserModel } from 'src/app/model/user/new-user.model';
import { UserService } from 'src/app/services/user/user.service';

function confirmPassword(passwordFormControl: FormControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== passwordFormControl.value) {
      return { 'confirmPassword': false };
    }
    return null;
  };
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  isLoadingResults: boolean = false;
  newUser: NewUserModel = new NewUserModel();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]);
  confirmPasswordFormControl = new FormControl('', [Validators.required, confirmPassword(this.passwordFormControl)]);

  formGroup: FormGroup = new FormGroup({
    emailFormControl: this.emailFormControl,
    nameFormControl: this.nameFormControl,
    cpfFormControl: this.cpfFormControl,
    passwordFormControl: this.passwordFormControl,
    confirmPasswordFormControl: this.confirmPasswordFormControl
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {

  }

  back() {
    this.router.navigate(['/login']);
  }

  onSubmit() {

    this.newUser.email = this.emailFormControl.value || '';
    this.newUser.name = this.nameFormControl.value || '';
    this.newUser.cpf = this.cpfFormControl.value || '';
    this.newUser.password = this.passwordFormControl.value || '';

    this.userService.createNewUser(this.newUser).subscribe((response) => {
      this.snackBar.open("Usuário criado com sucesso, você será redirecionando para o login", 'Ocultar', {
        duration: 5000,
      });
      setTimeout(() =>{
        this.router.navigate(['/login']);
      }, 5000)
    },
      (err) => {
        this.isLoadingResults = false;
        if (err.error && err.status != 500) {
          this.snackBar.open(err.status + ": " + err.error.returnMessage, 'Ocultar', {
            duration: 5000,
          });
        }
        else {
          this.snackBar.open("500: Erro ao processar requisição", 'Ocultar', {
            duration: 5000,
          });
        }
      });
  }
}
