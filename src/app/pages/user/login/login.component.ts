import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/model/general/myErrorStateMatcher.model';
import { LoginModel } from 'src/app/model/user/login.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoadingResults: boolean = false;
  loginModel: LoginModel = new LoginModel();


  userNameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  loginForm: FormGroup = new FormGroup({
    userNameControl: this.userNameControl,
    passwordControl: this.passwordControl,
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {
    if (localStorage.getItem('mpManagerToken'))
      this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginModel.userName = this.userNameControl.value || '';
    this.loginModel.password = this.passwordControl.value || '';

    this.userService.tokenUser(this.loginModel).subscribe(() => {
      this.userService.authenticate(this.loginModel).subscribe((result) => {
        localStorage.setItem("email", this.loginModel.userName);
        localStorage.setItem("nomeUsuario", result.returnValue.name);
        localStorage.setItem('mpManagerToken', result.returnValue.token);
        this.router.navigate(['/home']);
      },
        (err) => {
          this.errorCustom(err);
          return;
        });
    },
      (err) => {
        this.errorCustom(err);
        return;
      });
  }

  errorCustom(err: any) {
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
  }

  resetPassword() {

  }
}
